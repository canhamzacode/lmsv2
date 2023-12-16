import { useEffect, useState } from "react";
import ResultTable from "../../components/table/ResultTable";
import AppLayout from "../../layout/AppLayout";
import { useAuth } from "../../providers/AuthProvider";
import { BiDownload } from "react-icons/bi";

type SubJectProp = {
  subject: string;
  score: string;
};

// const header = Object.keys(Score[0]);
const header = ["id", "subject", "score"];
const StudentResult = () => {
  const { user, token } = useAuth();
  const [results, setResults] = useState<SubJectProp[]>([]);

  const fetchResult = async () => {
    try {
      const response = await fetch(
        `https://portal.labaikaschools.com/api/portal/student/result/${user?.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      const subjectScores = data.data.subject_score;
      const results = [];
      for (const subject in subjectScores) {
        if (subject in subjectScores) {
          const score = subjectScores[subject];
          results.push({ subject, score: score || "-" });
        }
      }
      setResults(results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchResult();
  }, []);

  return (
    <AppLayout role="student">
      <button className="bg-[#FFF5E5]  max-w-[150px] ml-auto w-full p-2 rounded-md flex items-center justify-center gap-2">
        <BiDownload size={25} /> <p>Download</p>
      </button>
      <div className="w-full bg-[#FFF5E5] grid gap-5 md:p-[40px] p-[20px] rounded-md">
        <div className="flex gap-2">
          <div className="h-[50px] w-[50px] bg-slate-300 rounded-[50%]">
            <img src="" alt="" />
          </div>
          <div>
            <h3 className="text-[#712126] text-xl">
              {user?.first_name} {user?.last_name}
            </h3>
            <p className="text-[#374957]">ID: {user?.id}</p>
          </div>
        </div>
        <div>
          <ResultTable header={header} score={results} />
        </div>
      </div>
    </AppLayout>
  );
};

export default StudentResult;
