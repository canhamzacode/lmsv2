import { TeacherData, TeacherDetails } from "../../Types";
import CollectionCard from "../../components/CollectionCard";
import AppLayout from "../../layout/AppLayout";
import { useAuth } from "../../providers/AuthProvider";
import { useEffect, useState } from "react";

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
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

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
      setTeachers(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllTeachers();
    getAllStudents();
  }, []);
  return (
    <AppLayout role="admin">
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-[30px] justify-center items-center grid-cols-1 ">
        <CollectionCard<TeacherDetails>
          data={teachers?.map((teacher) => teacher.details)}
          title="Teachers"
          id={teachers?.map((teacher) => teacher.id)}
        />

        {/* <CollectionCard title="Teachers" />
        <CollectionCard title="Classes" /> */}
      </div>
    </AppLayout>
  );
};

export default Admin;
