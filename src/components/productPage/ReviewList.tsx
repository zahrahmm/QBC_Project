import type { Review } from "../../types/product";

function ReviewList({ reviews }: { reviews: Review[] }) {
  return (
    <div className=" flex flex-col gap-4">
      {reviews.length === 0 && (
        <p className="mt-2 self-center shadow-sm w-5/6 h-24 text-center flex items-center justify-center rounded-xl">
          نظری ثبت نشده است.
        </p>
      )}

      {reviews.map((r) => (
        <div key={r._id} className="w-5/6 mr-6 p-4 rounded-xl shadow-sm ">
          <div className="mb-2 flex flex-col gap-3">
            <span className="font-bold">{r.name}</span>
            <p>{r.comment}</p>
            <div className="rating rating-sm rating-half">
              {Array.from({ length: 5 }).map((_, i) => (
                <input
                  key={i}
                  type="radio"
                  name={`rating-${r._id}`}
                  className="mask mask-star-2"
                  disabled
                  checked={i < r.rating}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
