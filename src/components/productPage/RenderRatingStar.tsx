const RenderRatingStar = (rating: number) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(
        <input
          key={i}
          type="radio"
          className="mask mask-star-2 "
          readOnly
          checked
        />
      );
    } else if (rating >= i - 0.5) {
      stars.push(
        <input
          key={i}
          type="radio"
          className="mask mask-star-2 mask-half-1 "
          readOnly
          checked
        />
      );
    } else {
      stars.push(
        <input key={i} type="radio" className="mask mask-star-2" readOnly />
      );
    }
  }

  return stars;
};

export default RenderRatingStar;
