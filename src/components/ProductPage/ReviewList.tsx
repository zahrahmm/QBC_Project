function ReviewList() {
  const reviews = ["خیلی عالی بود "];

  return (
    <div className="mr-25">
      <ul>
        {reviews.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;
