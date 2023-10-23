import Sidebar from "../components/Sidebar";
import { useState, ReactNode } from "react";
import "./AppLayout.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBarsStaggered } from "react-icons/fa6";
import logo from "../assets/image/logo.svg";
import user from "../assets/image/user.jpg";

interface AppLayout {
  children: ReactNode;
}
const AppLayout = ({ children }: AppLayout) => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="w-full h-screen grid layout relative">
      {showSideBar && (
        <div className="w-full h-screen absolute z-[1] bg-black/40" />
      )}
      <Sidebar
        setShowSideBar={setShowSideBar}
        showSideBar={showSideBar}
        role="user"
      />
      <div className="w-full h-screen grid gap-7 overflow-y-auto bg-black/30 p-[20px]">
        <div className="w-full flex items-center justify-between gap-[10px]">
          <div className="w-[100px] h-[70px] md:hidden flex">
            <img src={logo} alt="logos" className="w-full h-full" />
          </div>
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
          <div className="flex items-center gap-[15px]">
            <div className="w-[50px] h-[50px] bg-slate-200 rounded-[50%]">
              <img
                src={user}
                alt="user"
                className="w-full h-full rounded-[50%]"
              />
            </div>
            <button
              className="md:hidden flex"
              onClick={() => setShowSideBar(!showSideBar)}
            >
              <FaBarsStaggered size={25} />
            </button>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
