import React from "react";
import { AiFillLock } from "react-icons/ai";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface PasswordInputProps {
  errors: any;
  register: UseFormRegister<FieldValues>;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ errors, register }) => {
  return (
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
        <p className="text-red-700 capitalize">{errors.password.message}</p>
      )}
    </div>
  );
};

export default PasswordInput;
