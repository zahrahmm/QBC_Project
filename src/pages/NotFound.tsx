import { Link } from "react-router";

function NotFound() {
  return (
    <div className="flex flex-col gap-3 justify-center h-screen items-center">
      <h1 className="text-2xl">صفحه مورد نظر پیدا نشد!</h1>
      <p>
        <Link to="/">
          <button className="btn btn-secondary">بازگشت به صفحه اصلی</button>
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
