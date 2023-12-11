interface PageDescriptionProps {
  length: number;
  heading: string;
}

const PageDescription = ({ length, heading }: PageDescriptionProps) => {
  return (
    <div className="w-full flex items-center justify-between  gap-[25px] text-[#fff5e5]">
      <div className="text-center bg-slate-100 py-2 px-4 rounded-xl text-black">
        <h3 className="text-lg font-bold">{length}</h3>
        <h3 className="text-xl">{heading}</h3>
      </div>
      <div className="text-center bg-slate-100 py-2 px-4 rounded-xl text-black">
        <h3 className="text-lg font-bold">Class</h3>
        <h2 className="text-xl">Creche</h2>
      </div>
    </div>
  );
};

export default PageDescription;
