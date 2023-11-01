import logo from "../assets/image/logo.svg";
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlinePoweroff,
  AiOutlineUser,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { FiKey } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { FaFileUpload } from "react-icons/fa";

interface SideBarProps {
  showSideBar: boolean;
  setShowSideBar: (boolean: boolean) => void;
  role: "admin" | "user" | "teacher";
}

const Sidebar = ({ showSideBar, setShowSideBar, role }: SideBarProps) => {
  const getSidebarItems = () => {
    if (role === "admin") {
      return [
        {
          name: "Home",
          icon: <AiOutlineHome size={25} />,
          href: "/dashboard/admin",
        },
        {
          name: "User Profile",
          icon: <AiOutlineUser size={25} />,
          href: "/user-profile",
        },
        {
          name: "Add User",
          icon: <AiOutlineUserAdd size={25} />,
          href: "/add-user",
        },
        {
          name: "View Results",
          icon: <IoNewspaperOutline size={25} />,
          href: "/results",
        },
        {
          name: "Promote Students",
          icon: <MdKeyboardDoubleArrowUp size={25} />,
          href: "/promote-students",
        },
        {
          name: "Broadcast Mail",
          icon: <AiOutlineMail size={25} />,
          href: "broadcast",
        },
        {
          name: "Reset Password",
          icon: <FiKey size={25} />,
          href: "/resetPassword",
        },
      ];
    } else if (role === "user") {
      return [
        {
          name: "Home",
          icon: <AiOutlineHome size={25} />,
          href: "/dashboard/student",
        },
        {
          name: "Student Profile",
          icon: <AiOutlineUser size={25} />,
          href: "/dashboard/student-profile",
        },
        {
          name: "View Results",
          icon: <IoNewspaperOutline size={25} />,
          href: "/dashboard/result",
        },
        {
          name: "Reset Password",
          icon: <FiKey size={25} />,
          href: "/resetPassword",
        },
      ];
    } else if (role === "teacher") {
      return [
        {
          name: "Home",
          icon: <AiOutlineHome size={25} />,
          href: "/dashboard/teacher",
        },
        {
          name: "Student Profile",
          icon: <AiOutlineUser size={25} />,
          href: "/user-profile",
        },
        {
          name: "View Results",
          icon: <IoNewspaperOutline size={25} />,
          href: "/view-results",
        },
        {
          name: "Upload Results",
          icon: <FaFileUpload size={25} />,
          href: "/upload-results",
        },
        {
          name: "Reset Password",
          icon: <FiKey size={25} />,
          href: "/resetPassword",
        },
      ];
    }

    // Return default links if the role doesn't match
    return [];
  };
  const sidebarItems = getSidebarItems();
  const location = useLocation();
  return (
    <div
      className={`w-[80%] md:w-full h-screen bg-[#FFF5E5] rounded-tr-[16px] rounded-br-[16px] md:flex md:flex-col ${
        showSideBar ? "absolute flex flex-col z-[2] " : "hidden"
      }`}
    >
      <div className="w-full relative">
        {showSideBar && (
          <button
            className="p-[15px] bg-slate-200 z-[2] text-xl absolute right-0"
            onClick={() => setShowSideBar(!showSideBar)}
          >
            <AiOutlineClose size={25} />
          </button>
        )}
      </div>
      <div className="w-full flex flex-col gap-[45px] py-[15px] relative min-h-screen">
        <div className="w-full max-w-[170px] h-[100px] mx-auto px-[20px]">
          <img src={logo} alt="logo" className="w-full h-full " />
        </div>
        <div className="flex flex-col">
          {sidebarItems.map((item, index) => (
            <Link to={item.href} key={index}>
              <div
                key={index}
                className={`w-full flex gap-4 border border-l-4   p-[15px] items-center cursor-pointer hover:bg-[#00000040] ${
                  location.pathname === item.href
                    ? "border-l-slate-700 bg-[#00000040]"
                    : ""
                }`}
              >
                {item.icon}
                {item.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="absolute w-full bottom-3 flex items-center justify-center ">
          <button className=" items-center flex gap-2 p-[15px] rounded-md">
            <AiOutlinePoweroff size={25} />
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
