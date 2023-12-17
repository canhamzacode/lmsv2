import { TeacherData } from "../../Types";
import PageDescription from "../../components/PageDescription";
import AppLayout from "../../layout/AppLayout";
import { useAuth } from "../../providers/AuthProvider";
import { useEffect, useState } from "react";
import Hero from "../../assets/image/admin.svg";

const Admin = () => {
  const { token } = useAuth();
  const [teachers, setTeachers] = useState<TeacherData[]>();

  const getAllTeachers = async () => {
    try {
      const response = await fetch(
        "https://portal.labaikaschools.com/api/admin/teachers",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = await response.json();
      setTeachers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTeachers();
  }, []);

  return (
    <AppLayout role="admin">
      <div className="w-full grid grid-cols-1 justify-center items-center max-w-[500px] mx-auto gap-9 ">
        <PageDescription
          heading="Teachers"
          length={teachers?.length as number}
        />
        <div className="w-full">
          <img src={Hero} alt="" className="w-[80%] mx-auto" />
        </div>
        <div>
          <h3 className="text-2xl text-[#FFF5E5] text-center">
            “Administration is the greatest act of Responsibility.”
          </h3>
        </div>
      </div>
    </AppLayout>
  );
};

export default Admin;
