import { Link, useNavigate } from "react-router-dom";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { LiaTransgenderSolid } from "react-icons/lia";
import { MdClass } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RiLockPasswordLine } from "react-icons/ri";
import { SignupSchema } from "../../config/Schema";
import { useState } from "react";
import { UserData } from "../../Types";

type StudentType = Pick<
  UserData,
  "first_name" | "last_name" | "email" | "address" | "gender"
> & {
  password: string;
  password_confirmation: string;
  grade: string;
};
const Signup = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const onCreateAccount = async (data: StudentType) => {
    setLoading(true);
    console.log(data);
    const gradeId = data.grade.slice(-1);
    try {
      const response = await fetch(
        `https://portal.labaikaschools.com/api/portal/${gradeId}/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      await response.json();
      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="grid gap-[10px] w-full ">
      <div className="w-full min-w-[400px]  text-center grid gap-[15px]">
        <p className="text-[#712126] text-center">
          Welcome Back, Kindly Login here
        </p>
        <form
          onSubmit={handleSubmit(onCreateAccount)}
          className="w-full text-center grid gap-[15px]"
        >
          <div className={`w-full ${errors.first_name ? "bg-red-100" : ""} `}>
            <div className="w-full p-[10px] bg-white rounded-lg border-[#712126] border flex gap-[5px]">
              <BiUser size={25} />
              <input
                type="text"
                placeholder="First Name"
                className="border-none outline-none w-full"
                {...register("first_name")}
              />
            </div>
            {errors.first_name && (
              <p className="text-red-700 capitalize">
                {errors.first_name.message}
              </p>
            )}
          </div>
          <div className={`w-full ${errors.last_name ? "bg-red-100" : ""} `}>
            <div className="w-full p-[10px] bg-white rounded-lg border-[#712126] border flex gap-[5px]">
              <BiUser size={25} />
              <input
                type="text"
                placeholder="Last Name"
                className="border-none outline-none w-full"
                {...register("last_name")}
              />
            </div>
            {errors.last_name && (
              <p className="text-red-700 capitalize">
                {errors.last_name.message}
              </p>
            )}
          </div>
          <div className={`w-full ${errors.address ? "bg-red-100" : ""} `}>
            <div className="w-[100%] p-[10px] bg-white rounded-lg border-[#712126] border flex gap-[5px]">
              <GoLocation size={25} />
              <input
                type="text"
                placeholder="Student Address"
                className="border-none outline-none w-full"
                {...register("address")}
              />
            </div>
            {errors.address && (
              <p className="text-red-700 capitalize">
                {errors.address.message}
              </p>
            )}
          </div>
          <div className={`w-full ${errors.first_name ? "bg-red-100" : ""} `}>
            <div className="w-[100%] p-[10px] bg-white rounded-lg border-[#712126] border flex gap-[5px]">
              <AiOutlineMail size={25} />
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
          <div className={`w-full ${errors.gender ? "bg-red-100" : ""} `}>
            <div className="w-[100%] p-[10px] bg-white rounded-lg border-[#712126] border flex gap-[5px]">
              <LiaTransgenderSolid size={25} />
              <select
                id="gender"
                className="border-none outline-none w-full"
                {...register("gender")}
              >
                <option value="">Sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            {errors.gender && (
              <p className="text-red-700">{errors.gender.message}</p>
            )}
          </div>
          <div className={`w-full ${errors.grade ? "bg-red-100" : ""} `}>
            <div className="w-[100%] p-[10px] bg-white rounded-lg border-[#712126] border flex gap-[5px]">
              <MdClass size={25} />
              <select
                {...register("grade")}
                id="grade"
                className="border-none outline-none w-full"
              >
                <option value="">Grade</option>
                <option value="grade1">Grade 1</option>
                <option value="grade2">Grade 2</option>
                <option value="grade3">Grade 3</option>
                <option value="grade4">Grade 4</option>
                <option value="grade5">Grade 5</option>
                <option value="grade6">Grade 6</option>
              </select>
            </div>
            {errors.grade && (
              <p className="text-red-700 capitalize">{errors.grade.message}</p>
            )}
          </div>
          {/* <div className="w-[100%] p-[10px] bg-white rounded-lg border-[#712126] border flex gap-[5px]">
            <BsImage size={25} />
            <input type="file" className="border-none outline-none w-full" />
          </div> */}
          <div className={`w-full ${errors.password ? "bg-red-100" : ""} `}>
            <div className="w-[100%] p-[10px] bg-white rounded-lg border-[#712126] border flex gap-[5px]">
              <RiLockPasswordLine size={25} />
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className="border-none outline-none w-full"
              />
            </div>
            {errors.password && (
              <p className="text-red-700 capitalize">
                {errors.password.message}
              </p>
            )}
          </div>
          <div
            className={`w-full ${
              errors.password_confirmation ? "bg-red-100" : ""
            } `}
          >
            <div className="w-[100%] p-[10px] bg-white rounded-lg border-[#712126] border flex gap-[5px]">
              <AiFillLock size={25} />
              <input
                type="password"
                placeholder="Confirm Password"
                className="border-none outline-none w-full"
                {...register("password_confirmation")}
              />
            </div>
            {errors.password_confirmation && (
              <p className="text-red-700 capitalize">
                {errors.password_confirmation.message}
              </p>
            )}
          </div>
          <button
            disabled={loading}
            type="submit"
            className="bg-[#A77B37] p-[15px] text-[#fff] w-full max-w-[400px] mx-auto rounded "
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>
        <div className="flex justify-between">
          <p>Already Have an account</p>
          <Link to="/login">
            <p>Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
