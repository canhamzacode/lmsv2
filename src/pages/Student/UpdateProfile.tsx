import { IoClose } from "react-icons/io5";
import AppLayout from "../../layout/AppLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useAuth } from "../../providers/AuthProvider";
import { useState } from "react";
import { UserData } from "../../Types";

type UpdateType = Pick<
  UserData,
  "first_name" | "last_name" | "email" | "address" | "gender"
>;

const UpdateProfile = () => {
  const { user, token, updateUser } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [mssg, setMssg] = useState<string>("");
  const userDefaults = {
    first_name: user?.first_name,
    last_name: user?.last_name,
    email: user?.email,
    address: user?.address,
    gender: user?.gender,
  };
  const studentSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid Email format")
      .required("Email is required"),
    first_name: yup.string().required("First name is Required"),
    last_name: yup.string().required("Last name is Required"),
    address: yup.string().required("Last name is Required"),
    gender: yup.string().required("Gender Is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: userDefaults,
    resolver: yupResolver(studentSchema as yup.AnyObjectSchema),
  });

  const onSubmit = async (data: UpdateType) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://portal.labaikaschools.com/api/portal/student/${user?.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      );
      const updatedInfo = await response.json();
      const updatedData = updatedInfo.data.details;

      updateUser(updatedData);
      setLoading(false);
      setMssg("Student Data Updated Sucessfully");
      setTimeout(() => {
        setMssg("");
      }, 2000);
    } catch (error) {
      setMssg("Something went wrong");
      setTimeout(() => {
        setMssg("");
      }, 2000);
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <AppLayout role="student">
      <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        {mssg && (
          <div className="w-full bg-[#FFF5E5] p-2 rounded-md flex justify-between">
            <h3>{mssg}</h3>
            <button type="button" className="bg-white">
              <IoClose size={20} />
            </button>
          </div>
        )}
        <div className="w-full grid grid-cols-1 gap-4">
          <div className="w-full p-2 bg-white">
            <input
              type="text"
              placeholder="First name"
              className="w-full border-none bg-none outline-none"
              {...register("first_name")}
            />
          </div>
          {errors.first_name && (
            <p className="text-red-700 capitalize">
              {errors.first_name.message as string}
            </p>
          )}
          <div className="w-full p-2 bg-white">
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border-none bg-none outline-none"
              {...register("last_name")}
            />
          </div>
          {errors.last_name && (
            <p className="text-red-700 capitalize">
              {errors.last_name.message as string}
            </p>
          )}
          <div className="w-full p-2 bg-white">
            <input
              type="email"
              placeholder="Email"
              className="w-full border-none bg-none outline-none"
              {...register("email")}
            />
          </div>
          {errors.email && (
            <p className="text-red-700 capitalize">
              {errors.email.message as string}
            </p>
          )}
          <div className="w-full p-2 bg-white">
            <input
              type="text"
              placeholder="Address"
              className="w-full border-none bg-none outline-none"
              {...register("address")}
            />
          </div>
          {errors.address && (
            <p className="text-red-700 capitalize">
              {errors.address.message as string}
            </p>
          )}
          <div className="w-full p-2 bg-white">
            <select
              id="gender"
              className="w-full border-none outline-none"
              {...register("gender")}
            >
              <option value="" className="">
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {errors.gender && (
            <p className="text-red-700 capitalize">
              {errors.gender.message as string}
            </p>
          )}
        </div>
        <button disabled={loading} className="w-full p-3 bg-[#FFF5E5]">
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </AppLayout>
  );
};

export default UpdateProfile;
