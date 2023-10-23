import logo from "../assets/image/logo.svg";
import { AiOutlineHome, AiOutlinePoweroff } from "react-icons/ai";

interface SideBarProps {
  showSideBar: boolean;
  setShowSideBar: (boolean: boolean) => void;
}
const sideItem = [
  {
    name: "Home",
    icon: <AiOutlineHome size={25} />,
  },
  {
    name: "User Profile",
    icon: <AiOutlineHome size={25} />,
  },
  {
    name: "Add User",
    icon: <AiOutlineHome size={25} />,
  },
  {
    name: "View Results",
    icon: <AiOutlineHome size={25} />,
  },
  {
    name: "Promote Students",
    icon: <AiOutlineHome size={25} />,
  },
  {
    name: "Broadcast Mail",
    icon: <AiOutlineHome size={25} />,
  },
  {
    name: "Reset Password",
    icon: <AiOutlineHome size={25} />,
  },
];
const Sidebar = ({ showSideBar, setShowSideBar }: SideBarProps) => {
  return (
    <div
      className={`w-[80%] md:w-full h-screen bg-[#FFF5E5] rounded-tr-[16px] rounded-br-[16px] md:flex md:flex-col ${
        showSideBar ? "absolute flex flex-col z-[2] " : "hidden"
      }`}
    >
      <div className="w-full relative">
        {showSideBar && (
          <button
            className="p-[15px] bg-slate-200 text-xl absolute right-0"
            onClick={() => setShowSideBar(!showSideBar)}
          >
            x
          </button>
        )}
      </div>
      <div className="w-full flex flex-col gap-[45px] py-[15px] ">
        <div className="w-full max-w-[170px] h-[100px] mx-auto px-[20px]">
          <img src={logo} alt="logo" className="w-full h-full " />
        </div>
        <div className="flex flex-col">
          {sideItem.map((item, index) => (
            <div
              key={index}
              className="w-full flex gap-4 border border-l-4 border-l-slate-700 bg-[#00000040] p-[15px] items-center cursor-pointer"
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
        <div className="absolute bottom-[15px] left-[25px]">
          <button className="w-full bg-slate-400 items-center flex gap-2 p-[15px] rounded-md">
            <AiOutlinePoweroff size={25} />
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
