interface PageDescriptionProps {
  length: number;
  heading: string;
  story: string;
}

const PageDescription = ({ length, heading, story }: PageDescriptionProps) => {
  return (
    <div className=" h-full md:relative">
      <div className="w-full flex items-center justify-between  gap-[25px] text-[#fff5e5]">
        <div className="text-center bg-slate-100 p-2 rounded-xl text-black">
          <h2 className="text-xl">{length}</h2>
          <h3 className="text-2xl">{heading}</h3>
        </div>
        <div className="text-center bg-slate-100 p-2 rounded-xl text-black">
          <h3 className="text-xl">Class</h3>
          <h2 className="text-2xl">Creche</h2>
        </div>
      </div>
      <h3 className="text-2xl text-[#FFF5E5] p-4 border-r-4  border-b-4 md:absolute mt-2 bottom-0 right-0">
        {story}
      </h3>
    </div>
  );
};

export default PageDescription;
