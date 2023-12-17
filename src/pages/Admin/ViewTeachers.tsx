import { useEffect, useState } from "react";
import AppLayout from "../../layout/AppLayout";
import { useAuth } from "../../providers/AuthProvider";
import { TeacherType } from "../../Types";
import TeachersTable from "../../components/table/TeachersTable";

type EndpointType = Pick<
  TeacherType,
  "class_to_teach" | "email" | "first_name" | "last_name"
>;
const header = ["id", "first name", "last name", "email", "class To teach"];
const ViewTeachers = () => {
  const { token } = useAuth();
  const [teachersDatas, setTeachersDatas] = useState<TeacherType[]>();
  const getAllTeachers = async () => {
    try {
      const response = await fetch(
        `https://portal.labaikaschools.com/api/admin/teachers`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      const teachers = data.data;

      const dataArray: TeacherType[] = [];
      if (teachers) {
        teachers.map((teacher: { id: string; details: EndpointType }) => {
          const teacherData = {
            id: teacher?.id,
            ...teacher?.details,
          };
          dataArray.push(teacherData);
        });
      }
      setTeachersDatas(dataArray);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllTeachers();
  }, []);

  return (
    <AppLayout role="admin">
      <TeachersTable header={header} data={teachersDatas} />
    </AppLayout>
  );
};

export default ViewTeachers;
