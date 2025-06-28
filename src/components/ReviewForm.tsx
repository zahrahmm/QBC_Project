function ReviewForm() {
  return (
    <div className="mr-25">
      <h3>ثبت نظر جدید</h3>
      <textarea placeholder="نظر خود را بنویسید..." style={{ width: "100%" }} />
      <br />
      <button style={{ marginTop: "10px" }}>ارسال</button>
    </div>
  );
}

export default ReviewForm;
