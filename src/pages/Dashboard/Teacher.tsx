import AppLayout from "../../layout/AppLayout";
import { StudentDetails } from "../../Types";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/AuthProvider";
import PageDescription from "../../components/PageDescription";
import Hero from "../../assets/image/teacher.svg";

const Teacher = () => {
  const [students, setStudents] = useState<StudentDetails[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const { token, user } = useAuth();
  const getAllStudents = async () => {
    try {
      const response = await fetch(
        "https://portal.labaikaschools.com/api/admin/students",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = await response.json();
      setStudents(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllStudents();
  }, []);
  if (loading) {
    return "Loading...";
  }
  return (
    <AppLayout role="teacher">
      <div className="w-full grid grid-cols-1 justify-center items-center max-w-[500px] mx-auto gap-9 ">
        <PageDescription
          heading="Students"
          length={students?.length as number}
          classToTeach={user?.class_to_teach as string}
        />
        <div className="w-full">
          <img src={Hero} alt="" className="w-[80%] mx-auto" />
        </div>
        <div>
          <h3 className="text-2xl text-[#FFF5E5] text-center">
            “Teaching is the greatest act of optimism.”
          </h3>
        </div>
      </div>
    </AppLayout>
  );
};

export default Teacher;
