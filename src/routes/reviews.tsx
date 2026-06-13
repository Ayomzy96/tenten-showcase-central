import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews — Tenten Computers" },
      { name: "description", content: "Read what customers say about Tenten Computers and leave your own review." },
      { property: "og:title", content: "Reviews — Tenten Computers" },
      { property: "og:description", content: "Customer reviews of Tenten Computers." },
    ],
  }),
  component: Reviews,
});

type Review = { id: string; name: string; rating: number; comment: string; created_at: string };

function Stars({ value, onChange }: { value: number; onChange?: (n: number) => void }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          disabled={!onChange}
          onClick={() => onChange?.(n)}
          className={onChange ? "cursor-pointer" : "cursor-default"}
          aria-label={n + " star"}
        >
          <Star className={"h-5 w-5 " + (n <= value ? "fill-primary text-primary" : "text-muted-foreground")} />
        </button>
      ))}
    </div>
  );
}

function Reviews() {
  const qc = useQueryClient();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as Review[];
    },
  });

  const mutation = useMutation({
    mutationFn: async () => {
      const trimmedName = name.trim();
      const trimmedComment = comment.trim();
      if (!trimmedName || trimmedName.length > 100) throw new Error("Enter your name (max 100 chars).");
      if (!trimmedComment || trimmedComment.length > 1000) throw new Error("Enter a review (max 1000 chars).");
      const { error } = await supabase.from("reviews").insert({
        name: trimmedName,
        comment: trimmedComment,
        rating,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Thanks for your review!");
      setName("");
      setComment("");
      setRating(5);
      qc.invalidateQueries({ queryKey: ["reviews"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  return (
    <div>
      <section style={{ background: "var(--gradient-hero)" }} className="border-b border-border/50">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Customer Reviews</h1>
          <p className="mt-3 text-muted-foreground">Honest feedback from real Tenten Computers customers.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_360px] lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold">What people are saying</h2>
          <div className="mt-6 space-y-4">
            {isLoading && <p className="text-muted-foreground">Loading reviews…</p>}
            {!isLoading && reviews.length === 0 && (
              <div className="rounded-2xl border border-dashed border-border p-8 text-center text-muted-foreground">
                No reviews yet — be the first!
              </div>
            )}
            {reviews.map((r) => (
              <article key={r.id} className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{r.name}</h3>
                  <span className="text-xs text-muted-foreground">{new Date(r.created_at).toLocaleDateString()}</span>
                </div>
                <div className="mt-1"><Stars value={r.rating} /></div>
                <p className="mt-3 text-sm text-foreground/90">{r.comment}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">Leave a review</h2>
          <form
            className="mt-4 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              mutation.mutate();
            }}
          >
            <div>
              <Label htmlFor="name">Your name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} maxLength={100} placeholder="Jane Doe" required />
            </div>
            <div>
              <Label>Rating</Label>
              <div className="mt-2"><Stars value={rating} onChange={setRating} /></div>
            </div>
            <div>
              <Label htmlFor="comment">Review</Label>
              <Textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} maxLength={1000} placeholder="Tell us about your experience…" rows={5} required />
            </div>
            <Button type="submit" disabled={mutation.isPending} className="w-full">
              {mutation.isPending ? "Submitting…" : "Submit Review"}
            </Button>
          </form>
        </aside>
      </section>
    </div>
  );
}