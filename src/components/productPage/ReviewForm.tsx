import { useState } from "react";
import { useAuthStore } from "../../stores/useAuthStore";
import type { Product } from "../../types/product";
import type { Review } from "../../types/product";

function ReviewForm({
  setProduct,
}: {
  setProduct: React.Dispatch<React.SetStateAction<Product | null>>;
}) {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const user = useAuthStore((state) => state.user);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      setError("لطفاً ابتدا وارد شوید.");
      return;
    }

    if (!rating) {
      setError("لطفاً امتیاز خود را انتخاب کنید.");
      return;
    }

    if (!comment.trim()) {
      setError("نظر خود را وارد کنید.");
      return;
    }

    setError(null);

    const newReview: Review = {
      _id: crypto.randomUUID(),
      name: user.username,
      comment,
      rating: Number(rating),
      createdAt: new Date().toISOString(),
    };

    setProduct((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        reviews: [...prev.reviews, newReview],
      };
    });

    setRating("");
    setComment("");
    setSuccess("نظر شما با موفقیت ثبت شد.");
    setTimeout(() => setSuccess(null), 3000);
  };

  return (
    <form className="mr-25 w-full max-w-[600px]" onSubmit={handleSubmit}>
      <fieldset className="fieldset">
        <label className="label" htmlFor="rating">
          امتیاز
        </label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="select w-full"
        >
          <option value="" disabled>
            انتخاب امتیاز
          </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>

        <label className="label" htmlFor="comment">
          نظر
        </label>
        <textarea
          id="comment"
          className="textarea w-full resize-none"
          placeholder="نظر خود را وارد نمایید"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        {error && <p className="alert alert-error mt-2 w-fit">{error}</p>}
        {success && <p className="alert alert-success mt-2 w-fit">{success}</p>}

        <button type="submit" className="btn btn-secondary w-fit">
          ثبت نظر
        </button>
      </fieldset>
    </form>
  );
}

export default ReviewForm;
