import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { AdminLoginSchema, StudentLoginSchema } from "../../config/Schema";
import { useForm } from "react-hook-form";
import { useState, SetStateAction } from "react";
import { useAuth } from "../../providers/AuthProvider";
import { AnyObjectSchema } from "yup";
import {
  PasswordInput,
  EmailInput,
  UsernameInput,
  Button,
} from "../../components/input";

const Login = () => {
  const navigate = useNavigate();
  const [userToLogin, setUserToLogin] = useState("student");
  const updateUserToLogin = (info: SetStateAction<string>) => {
    setUserToLogin(info);
  };
  const { updateToken, token, updateUser } = useAuth();
  const [loading, setLoading] = useState(false);

  const currentSchema =
    userToLogin == "student" ? StudentLoginSchema : AdminLoginSchema;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(currentSchema as AnyObjectSchema),
  });

  const onLogin = async (data: any) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://portal.labaikaschools.com/api/${
          userToLogin === "student" ? "portal" : userToLogin
        }/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const { token, admin, data: loginRes } = await response.json();
      if (token) {
        updateToken(token);
      }

      if (admin || loginRes) {
        // Customize how user data is stored based on the login type
        const userDetails =
          userToLogin === "student"
            ? { ...loginRes.details, id: loginRes.id }
            : { ...loginRes, id: loginRes.data.id };

        updateUser({ ...userDetails, role: userToLogin });
        navigate(`/dashboard`);
      }
    } catch (error) {
      // Handle errors
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-[10px]">
      <div className="w-full  text-center grid gap-[15px]">
        <p className="text-[#712126] text-center">
          Welcome Back, Kindly Login here
        </p>
        <form
          onSubmit={handleSubmit(onLogin)}
          className="w-full  text-center grid gap-[15px]"
        >
          {token ? token : ""}
          {userToLogin == "student" ? (
            <EmailInput errors={errors} register={register} />
          ) : (
            <UsernameInput errors={errors} register={register} />
          )}
          <PasswordInput errors={errors} register={register} />
          <Button loading={loading} label="Submit.." type="submit" />
        </form>

        <div className="flex flex-wrap justify-between w-full">
          <p>Don't Have an account</p>
          <Link to="/signup">
            <p>Sign Up</p>
          </Link>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-3 w-full">
          <button
            className={`${
              userToLogin === "admin" ? "bg-[#A77B37]" : "bg-[#6a5b44]"
            } p-[15px] text-[#fff] w-full mx-auto rounded`}
            onClick={() => updateUserToLogin("admin")}
          >
            Admin
          </button>
          <button
            className={`${
              userToLogin === "student" ? "bg-[#A77B37]" : "bg-[#6a5b44]"
            } p-[15px] text-[#fff] w-full mx-auto rounded`}
            onClick={() => updateUserToLogin("student")}
          >
            Student
          </button>
          <button
            className={`${
              userToLogin === "teacher" ? "bg-[#A77B37]" : "bg-[#6a5b44]"
            } p-[15px] text-[#fff] w-full mx-auto rounded`}
            onClick={() => updateUserToLogin("teacher")}
          >
            Teacher
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
