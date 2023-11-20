import { Link } from "react-router-dom";
import Button from "../../components/input/Button";

const NotFound = () => {
  return (
    <div className="w-full grid items-center justify-center gap-3 mx-auto ">
      <h3 className="text-2xl">Page NotFound</h3>
      <Link to="/">
        <Button label="Back To Home" />
      </Link>
    </div>
  );
};

export default NotFound;
