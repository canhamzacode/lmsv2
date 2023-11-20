import React from "react";

interface TableProps {
  header: string[];
  score: { subject: string; score: string }[];
}

const Table: React.FC<TableProps> = ({ header, score }) => {
  return (
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
        {score.map((person, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">{index + 1}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <div className="text-sm text-gray-500">{person.subject}</div>
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
  );
};

export default Table;
