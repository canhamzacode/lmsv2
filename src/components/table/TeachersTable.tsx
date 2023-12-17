import React from "react";
import { TeacherType } from "../../Types";

interface TableProps {
  header: string[];
  data: TeacherType[] | undefined;
}

const TeachersTable: React.FC<TableProps> = ({ header, data }) => {
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
              <div className="text-sm text-gray-500"> {person.id} </div>
            </td>
            {/* <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <div className="text-sm text-gray-500 capitalize">
                    {person.first_name}
                  </div>
                </div>
              </div>
            </td> */}
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500 capitalize">
                {person.first_name}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500 capitalize">
                {person.last_name}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500 capitalize">
                {person.email}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500 capitalize">
                {person.class_to_teach}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TeachersTable;
