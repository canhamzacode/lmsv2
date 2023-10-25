import { Link } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../config/Schema";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });
  const onLogin = (data: any) => {
    console.log(data);
  };
  return (
    <div className="grid gap-[10px]">
      <div className="w-full  text-center grid gap-[15px]">
        <p className="text-[#712126] text-center">
          Welcome Back, Kindly Login here
        </p>
        <form
          onSubmit={handleSubmit(onLogin)}
          className="w-full min-w-[300px]  text-center grid gap-[15px]"
        >
          <div className={`w-full ${errors.email ? "bg-red-100" : ""} `}>
            <div className="w-[100%] p-[10px] bg-white rounded-lg border-[#712126] border flex gap-[5px]">
              <BiUser size={25} />
              <input
                type="email"
                placeholder="Email"
                className="border-none outline-none w-full"
                {...register("email")}
              />
            </div>
            {errors.email && (
              <p className="text-red-700 capitalize">{errors.email.message}</p>
            )}
          </div>
          <div className={`w-full ${errors.password ? "bg-red-100" : ""} `}>
            <div className="w-[100%] p-[10px] bg-white rounded-lg border-[#712126] border flex gap-[5px]">
              <AiFillLock size={25} />
              <input
                type="password"
                placeholder="Password"
                className="border-none outline-none w-full"
                {...register("password")}
              />
            </div>
            {errors.password && (
              <p className="text-red-700 capitalize">
                {errors.password.message}
              </p>
            )}
          </div>
          {/* <div className="flex justify-between items-center gap-[40px]">
            <Link to="/forgetPass">
              <p className="text-[#374957]">Forget Password</p>
            </Link>
            <div className="flex gap-[10px]">
              <p className="text-[#374957]">Keep me logged in</p>
              <input type="checkbox" name="" id="" />
            </div>
          </div> */}
          <button
            type="submit"
            className="bg-[#A77B37] p-[15px] text-[#fff] w-full max-w-[400px] mx-auto rounded "
          >
            Login
          </button>
        </form>

        <div className="flex justify-between">
          <p>Don't Have an account</p>
          <Link to="/signup">
            <p>Sign Up</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
