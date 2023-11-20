import mountain from "../assets/image/mountain.jpg";
import Logo from "../assets/image/logo.svg";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div
      className="w-full min-h-[100vh] bg-gradient-to-b from-opacity-60 via-black via-opacity-60 to-transparent flex items-center justify-center flex-col gap-[20px] p-[10px] "
      style={{
        backgroundImage: `url(${mountain})`,
        backgroundPosition: "50%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-[800px] bg-white bg-opacity-80 flex flex-col items-center justify-center p-[40px] rounded gap-[20px]">
        <div className="w-[150px] h-[150px] rounded-full mx-auto">
          <img src={Logo} alt="logo" className="w-full h-full" />
        </div>
        <div className="w-full max-w-[500px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
