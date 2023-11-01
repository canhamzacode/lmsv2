import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full grid gap-3">
      <h3 className="text-2xl">Page NotFound</h3>
      <Link to="/">
        <button className="bg-[#A77B37] p-[15px] text-[#fff] w-full max-w-[400px] mx-auto rounded ">
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
