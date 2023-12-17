import AppLayout from "../../layout/AppLayout";
import { MdAssignmentAdd } from "react-icons/md";
import { useAuth } from "../../providers/AuthProvider";
import { useEffect, useState } from "react";
import { GradeType } from "../../Types";
import GradesTable from "../../components/table/GradesTable";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const header = ["id", "grade", "action"];

const ViewGrades = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [allGrades, setAllGrades] = useState<GradeType[]>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [gradeName, setGradeName] = useState<string>("");

  const getAllGrades = async () => {
    try {
      const response = await fetch(
        `https://portal.labaikaschools.com/api/admin/grades`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const grades = await response.json();
      setAllGrades(grades.data);
    } catch (error) {
      console.log(error);
    }
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {
    getAllGrades();
  }, []);

  const onSubmit = async (gradeName: string) => {
    if (!gradeName) {
      alert("Grade must not be null");
      return;
    }

    try {
      const response = await fetch(
        `https://portal.labaikaschools.com/api/admin/grades`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ grade: gradeName }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error(`Error adding grade: ${errorData.message}`);
        return;
      }
      await response.json();
      alert("grade updated sucessfully");
      setShowModal(false);
      setGradeName("");
      navigate("/dashboard/grades");
    } catch (error) {
      console.error(error);
    }
  };

  const deleteGrade = async (id: string) => {
    try {
      const response = await fetch(
        `https://portal.labaikaschools.com/api/admin/grade/${id}`,
        {
          headers: {
            method: "DELETE",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await response.json();
      navigate("/dashboard/grades");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppLayout role="admin">
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
            <input
              type="text"
              className="w-full p-2 placeholder:text-black"
              placeholder="Grade Name e.g Grade 1"
              value={gradeName}
              onChange={(e) => setGradeName(e.target.value)}
            />
            <button
              onClick={() => onSubmit(gradeName)}
              className="bg-black text-white mt-2 w-full p-2 rounded-md flex items-center justify-center gap-2"
            >
              Submit
            </button>
          </div>
        </div>
      )}
      <button
        onClick={toggleModal}
        className="bg-[#FFF5E5]  max-w-[150px] ml-auto w-full p-2 rounded-md flex items-center justify-center gap-2"
      >
        <MdAssignmentAdd size={25} /> <p>Add Grades</p>
      </button>
      <GradesTable header={header} data={allGrades} deleteGrade={deleteGrade} />
    </AppLayout>
  );
};

export default ViewGrades;
