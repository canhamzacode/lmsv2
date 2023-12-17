import logo from "../assets/image/logo.svg";
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlinePoweroff,
  AiOutlineProfile,
  AiOutlineUser,
} from "react-icons/ai";
import { IoNewspaperOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./input/Button";
import { useAuth } from "../providers/AuthProvider";
import { CiViewList } from "react-icons/ci";
import { SiGoogleclassroom } from "react-icons/si";

interface SideBarProps {
  showSideBar: boolean;
  setShowSideBar: (boolean: boolean) => void;
  role: "admin" | "student" | "teacher";
}

const Sidebar = ({ showSideBar, setShowSideBar, role }: SideBarProps) => {
  const getSidebarItems = () => {
    if (role === "admin") {
      return [
        {
          name: "Home",
          icon: <AiOutlineHome size={25} />,
          href: "/dashboard",
        },
        {
          name: "View Teachers",
          icon: <CiViewList size={25} />,
          href: "/dashboard/teachers",
        },
        {
          name: "View All Grades",
          icon: <SiGoogleclassroom size={25} />,
          href: "/dashboard/grades",
        },
      ];
    } else if (role === "student") {
      return [
        {
          name: "Home",
          icon: <AiOutlineHome size={25} />,
          href: "/dashboard",
        },
        {
          name: "Student Profile",
          icon: <AiOutlineUser size={25} />,
          href: "/dashboard/profile",
        },
        {
          name: "View Results",
          icon: <IoNewspaperOutline size={25} />,
          href: "/dashboard/result",
        },
        {
          name: "Update Profile",
          icon: <AiOutlineProfile size={25} />,
          href: "/dashboard/update-profile",
        },
      ];
    } else if (role === "teacher") {
      return [
        {
          name: "Home",
          icon: <AiOutlineHome size={25} />,
          href: "/dashboard",
        },
        {
          name: "Teacher Profile",
          icon: <AiOutlineUser size={25} />,
          href: "/dashboard/teacher",
        },
        {
          name: "View Students",
          icon: <CiViewList size={25} />,
          href: "/dashboard/students",
        },
      ];
    }
    return [];
  };
  const sidebarItems = getSidebarItems();
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const signOut = () => {
    logout();
    navigate("/login");
  };
  return (
    <div
      className={`w-[80%] md:w-full h-screen bg-[#FFF5E5] rounded-tr-[16px] rounded-br-[16px] md:flex md:flex-col ${
        showSideBar ? "absolute flex flex-col z-20 " : "hidden"
      }`}
    >
      <div className="w-full relative">
        {showSideBar && (
          <Button
            className="p-[15px] bg-slate-200 z-[2] text-xl absolute right-0"
            label={<AiOutlineClose size={25} />}
            onClick={() => setShowSideBar(!showSideBar)}
          />
        )}
      </div>
      <div className="w-full flex flex-col gap-[75px] py-[15px] h-screen">
        <div className="w-full flex flex-col gap-[45px] py-[15px]">
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
        </div>

        <div className="w-full flex justify-center items-center ">
          <Button
            className="bg-[#00000040] items-center flex gap-2 p-[15px] rounded-md"
            label={
              <p className="flex gap-2">
                <AiOutlinePoweroff size={25} /> Log Out
              </p>
            }
            onClick={signOut}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
