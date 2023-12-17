import React from "react";
import { GradeType } from "../../Types";
import { RiDeleteBin2Line } from "react-icons/ri";

interface TableProps {
  header: string[];
  data: GradeType[] | undefined;
  deleteGrade: (data: string) => void;
}

const GradesTable: React.FC<TableProps> = ({ header, data, deleteGrade }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {header.map((head) => (
            <th
              key={head}
              scope="col"
              className=" px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
            >
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data?.map((person, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">{person.id}</div>
            </td>

            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500 capitalize">
                {person.grade}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500 capitalize">
                <button onClick={() => deleteGrade(person.id)}>
                  <RiDeleteBin2Line size={25} color={"red"} />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GradesTable;
