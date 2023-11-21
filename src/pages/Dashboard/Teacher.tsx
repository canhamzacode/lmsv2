import AppLayout from "../../layout/AppLayout";
import CollectionCard from "../../components/CollectionCard";
import { StudentDetails } from "../../Types";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/AuthProvider";
import PageDescription from "../../components/PageDescription";

const Teacher = () => {
  const [students, setStudents] = useState<StudentDetails[]>();
  const [error, setError] = useState<String>();
  const [loading, setLoading] = useState<Boolean>(false);

  const { token } = useAuth();
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
      console.log(data.data);
    } catch (error) {
      setError("Error fetching student data");
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
  if (error) {
    return "Error...";
  }
  return (
    <AppLayout role="teacher">
      <div className="w-full grid md:grid-cols-2 gap-[30px] justify-center items-start grid-cols-1 ">
        <PageDescription
          heading="Students"
          length={students?.length as number}
          story="“Teaching is the greatest act of optimism.”"
        />
        <CollectionCard<StudentDetails> data={students} title="students" />
      </div>
    </AppLayout>
  );
};

export default Teacher;
