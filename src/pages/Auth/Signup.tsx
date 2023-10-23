import { Link } from "react-router-dom";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { LiaTransgenderSolid } from "react-icons/lia";
import { MdClass } from "react-icons/md";
import { BsImage } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";

const Signup = () => {
  return (
    <div className="grid gap-[10px] w-full ">
      <div className="w-full min-w-[300px]  text-center grid gap-[15px]">
        <p className="text-[#712126] text-center">
          Welcome Back, Kindly Login here
        </p>
        <form
          action=""
          className="w-full min-w-[300px]  text-center grid gap-[15px]"
        >
          <div className="w-[100%] p-[10px] bg-white rounded-lg border-[#712126] border flex gap-[5px]">
            <BiUser size={25} />
            <input
              type="text"
              placeholder="First Name"
              className="border-none outline-none w-full"
            />
          </div>
          <div className="w-[100%] p-[10px] bg-white rounded-lg border-[#712126] border flex gap-[5px]">
            <BiUser size={25} />
            <input
              type="text"
              placeholder="Last Name"
              className="border-none outline-none w-full"
            />
          </div>
          <div className="w-[100%] p-[10px] bg-white rounded-lg border-[#712126] border flex gap-[5px]">
            <GoLocation size={25} />
            <input
              type="text"
              placeholder="Student Address"
              className="border-none outline-none w-full"
            />
          </div>
          <div className="w-[100%] p-[10px] bg-white rounded-lg border-[#712126] border flex gap-[5px]">
            <AiOutlineMail size={25} />
            <input
              type="email"
              placeholder="Email"
              className="border-none outline-none w-full"
            />
          </div>
          <div className="w-[100%] p-[10px] bg-white rounded-lg border-[#712126] border flex gap-[5px]">
            <LiaTransgenderSolid size={25} />
            <select
              name=""
              id="gender"
              className="border-none outline-none w-full"
            >
              <option value="">Gender</option>
              <option value="">Male</option>
              <option value="">Female</option>
            </select>
          </div>
          <div className="w-[100%] p-[10px] bg-white rounded-lg border-[#712126] border flex gap-[5px]">
            <MdClass size={25} />
            <select
              name=""
              id="grade"
              className="border-none outline-none w-full"
            >
              <option value="">Grade</option>
              <option value="">Grade 1</option>
              <option value="">Grade 2</option>
              <option value="">Grade 3</option>
              <option value="">Grade 4</option>
              <option value="">Grade 5</option>
              <option value="">Grade 6</option>
            </select>
          </div>
          <div className="w-[100%] p-[10px] bg-white rounded-lg border-[#712126] border flex gap-[5px]">
            <BsImage size={25} />
            <input type="file" className="border-none outline-none w-full" />
          </div>
          <div className="w-[100%] p-[10px] bg-white rounded-lg border-[#712126] border flex gap-[5px]">
            <RiLockPasswordLine size={25} />
            <input
              type="password"
              placeholder="Password"
              className="border-none outline-none w-full"
            />
          </div>
          <div className="w-[100%] p-[10px] bg-white rounded-lg border-[#712126] border flex gap-[5px]">
            <AiFillLock size={25} />
            <input
              type="password"
              placeholder="Confirm Password"
              className="border-none outline-none w-full"
            />
          </div>

          <button className="bg-[#A77B37] p-[15px] text-[#fff] w-full max-w-[400px] mx-auto rounded ">
            Sign Up
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
