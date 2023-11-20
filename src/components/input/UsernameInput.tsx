import React from "react";
import { BiUser } from "react-icons/bi";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface UsernameInputProps {
  errors: any;
  register: UseFormRegister<FieldValues>;
}

const UsernameInput: React.FC<UsernameInputProps> = ({ errors, register }) => {
  return (
    <div className={`w-full ${errors.username ? "bg-red-100" : ""} `}>
      <div className="w-[100%] p-[10px] bg-white rounded-lg border-[#712126] border flex gap-[5px]">
        <BiUser size={25} />
        <input
          type="text"
          placeholder="Username"
          className="border-none outline-none w-full"
          {...register("username")}
        />
      </div>
      {errors.username && (
        <p className="text-red-700 capitalize">{errors.username.message}</p>
      )}
    </div>
  );
};

export default UsernameInput;
