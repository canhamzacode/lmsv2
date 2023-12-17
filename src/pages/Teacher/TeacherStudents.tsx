import { useEffect, useState } from "react";
import AppLayout from "../../layout/AppLayout";
import { useAuth } from "../../providers/AuthProvider";
import { BiDownload } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { yupResolver } from "@hookform/resolvers/yup";
import { ResultSchema } from "../../config/Schema";
import { useForm } from "react-hook-form";

type ResultType = {
  mathematics: number;
  english: number;
  civic: number;
  physics: number;
  chemistry: number;
  health_education: number;
};

const TeacherStudents = () => {
  const { token } = useAuth();
  const [showModal, setShowModal] = useState<boolean>(false);
  const classId = 9;
  const getAllStudents = async () => {
    try {
      const response = await fetch(
        `https://portal.labaikaschools.com/api/teacher/students/${classId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ResultSchema),
  });

  const onSubmitResult = (data: ResultType) => {
    console.log(data);
  };

  useEffect(() => {
    getAllStudents();
  }, []);
  return (
    <AppLayout role="teacher">
      {showModal && (
        <div className="w-full absolute top-0 left-0 h-screen bg-black/50 p-4 flex items-center justify-center">
          <div className="w-full max-w-[600px] text-center bg-[#FFF5E5] p-6 relative grid gap-2">
            <button
              onClick={toggleModal}
              type="button"
              className="absolute right-2 top-2 p-2 flex items-center justify-center bg-white rounded-[50%]"
            >
              <IoClose size={25} />
            </button>
            <h3 className="text-2xl">Add Grade</h3>
            <form onSubmit={handleSubmit(onSubmitResult)} className="">
              <div className="w-full text-left flex flex-col gap-2">
                <label htmlFor="mathematics">Mathematics</label>
                <input
                  type="number"
                  className="w-full p-2 placeholder:text-black"
                  placeholder="100"
                  {...register("mathematics")}
                />
                {errors.mathematics && (
                  <p className="text-red-700 capitalize">
                    {errors.mathematics.message}
                  </p>
                )}
              </div>
              <div className="w-full text-left flex flex-col gap-2">
                <label htmlFor="english">English</label>
                <input
                  type="number"
                  className="w-full p-2 placeholder:text-black"
                  placeholder="100"
                  {...register("english")}
                />
                {errors.english && (
                  <p className="text-red-700 capitalize">
                    {errors.english.message}
                  </p>
                )}
              </div>
              <div className="w-full text-left flex flex-col gap-2">
                <label htmlFor="civic">Civic</label>
                <input
                  type="number"
                  className="w-full p-2 placeholder:text-black"
                  placeholder="100"
                  {...register("civic")}
                />
                {errors.civic && (
                  <p className="text-red-700 capitalize">
                    {errors.civic.message}
                  </p>
                )}
              </div>
              <div className="w-full text-left flex flex-col gap-2">
                <label htmlFor="physics">Physics</label>
                <input
                  type="number"
                  className="w-full p-2 placeholder:text-black"
                  placeholder="100"
                  {...register("physics")}
                />
                {errors.physics && (
                  <p className="text-red-700 capitalize">
                    {errors.physics.message}
                  </p>
                )}
              </div>
              <div className="w-full text-left flex flex-col gap-2">
                <label htmlFor="chemistry">Chemistry</label>
                <input
                  type="number"
                  className="w-full p-2 placeholder:text-black"
                  placeholder="100"
                  {...register("chemistry")}
                />
                {errors.chemistry && (
                  <p className="text-red-700 capitalize">
                    {errors.chemistry.message}
                  </p>
                )}
              </div>
              <div className="w-full text-left flex flex-col gap-2">
                <label htmlFor="health_education">Health Education</label>
                <input
                  type="number"
                  className="w-full p-2 placeholder:text-black"
                  placeholder="100"
                  {...register("health_education")}
                />
                {errors.health_education && (
                  <p className="text-red-700 capitalize">
                    {errors.health_education.message}
                  </p>
                )}
              </div>
              <button className="bg-black text-white mt-2 w-full p-2 rounded-md flex items-center justify-center gap-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      <button
        onClick={toggleModal}
        className="bg-[#FFF5E5]  max-w-[150px] ml-auto w-full p-2 rounded-md flex items-center justify-center gap-2"
      >
        <BiDownload size={25} /> <p>Download</p>
      </button>
      <div>TeacherStudents</div>
    </AppLayout>
  );
};

export default TeacherStudents;
