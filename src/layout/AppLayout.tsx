import Sidebar from "../components/Sidebar";
import { useState, ReactNode } from "react";
import "./AppLayout.css";
import { FaBarsStaggered } from "react-icons/fa6";
import user from "../assets/image/user.jpg";
import StudentHeader from "../components/StudentHeader";
import { useAuth } from "../providers/AuthProvider";
import CustomToastContainer from "../components/CustomToastContainer";

interface AppLayout {
  children: ReactNode;
  role: "admin" | "student" | "teacher";
}
const AppLayout = ({ children, role }: AppLayout) => {
  const { user: profile } = useAuth();
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="w-full h-screen grid layout relative">
      {showSideBar && (
        <div className="w-full h-screen absolute z-[1] bg-black/40" />
      )}
      <Sidebar
        setShowSideBar={setShowSideBar}
        showSideBar={showSideBar}
        role={role}
      />
      <div className="w-full h-screen flex flex-col gap-7 overflow-y-auto bg-black/50 p-[20px]">
        <div className="w-full flex items-center justify-between gap-[10px]">
          {role === "student" ? (
            <StudentHeader />
          ) : (
            <p className="capitalize text-white font-bold text-xl">
              {profile?.username}
            </p>
          )}

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
