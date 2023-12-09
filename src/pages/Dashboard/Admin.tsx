import { TeacherData, TeacherDetails } from "../../Types";
import CollectionCard from "../../components/CollectionCard";
import PageDescription from "../../components/PageDescription";
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
      console.log(teachers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTeachers();
  }, []);

  return (
    <AppLayout role="admin">
      <div className="w-full grid md:grid-cols-2 gap-[30px] justify-center items-center grid-cols-1 ">
        <div className=" h-full md:relative ">
          <PageDescription
            heading="Teachers"
            length={teachers?.length as number}
            story="Administration is the greatest act of Responsibility.”"
          />
        </div>
        <CollectionCard<TeacherDetails>
          data={teachers?.map((teacher) => teacher.details)}
          title="teachers"
        />
      </div>
    </AppLayout>
  );
};

export default Admin;
