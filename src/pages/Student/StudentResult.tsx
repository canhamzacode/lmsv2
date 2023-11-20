import Table from "../../components/Table";
import AppLayout from "../../layout/AppLayout";
const Score = [
  {
    subject: "Agric",
    score: "20",
  },
  {
    subject: "English",
    score: "20",
  },
];

// get header dynamically
const header = Object.keys(Score[0]);
const StudentResult = () => {
  return (
    <AppLayout role="student">
      <div className="w-full bg-[#FFF5E5] grid gap-5 md:p-[40px] p-[20px] rounded-md">
        <div className="flex gap-2">
          <div className="h-[50px] w-[50px] bg-slate-300 rounded-[50%]">
            <img src="" alt="" />
          </div>
          <div>
            <h3 className="text-[#712126] text-xl">Student Name</h3>
            <p className="text-[#374957]">ID:STUD003</p>
          </div>
        </div>
        <div>
          <Table header={header} score={Score} />
        </div>
      </div>
    </AppLayout>
  );
};

export default StudentResult;
