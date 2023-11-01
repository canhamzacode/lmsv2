import React from "react";

type InfoProp = {
  title: string;
  data: string;
  icon: React.ReactNode;
};
const InformationBlock = ({ title, data, icon }: InfoProp) => {
  return (
    <div className="w-full px-[20px] py-[15px] flex items-center gap-4 border border-[#DEDEDE]">
      <div>{icon}</div>
      <div className="w-full">
        <p className="text-[#374957]">{title}</p>
        <h3 className="text-[#712126] md:text-xl text-lg text-ellipsis">
          {data}
        </h3>
      </div>
    </div>
  );
};

export default InformationBlock;
