import React from "react";
import { BiUser } from "react-icons/bi";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface EmailInputProps {
  errors: any;
  register: UseFormRegister<FieldValues>;
}

const EmailInput: React.FC<EmailInputProps> = ({ errors, register }) => {
  return (
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
  );
};

export default EmailInput;
