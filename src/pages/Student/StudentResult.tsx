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
const header = ["S/N", "Subject", "Score"];
const StudentResult = () => {
  return (
    <AppLayout role="user">
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
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {header.map((head) => (
                  <th
                    key={head}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Score.map((person, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{index + 1}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="text-sm text-gray-500">
                          {person.subject}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{person.score}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  );
};

export default StudentResult;
