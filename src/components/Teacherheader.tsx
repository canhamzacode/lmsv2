import { AiOutlineSearch } from "react-icons/ai";

const Teacherheader = () => {
  return (
    <div className="w-full max-w-[550px] bg-white px-[20px] py-[5px] rounded-md">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-[35px] border-none outline-none"
        />

        <button>
          <AiOutlineSearch size={30} />
        </button>
      </div>
    </div>
  );
};

export default Teacherheader;
