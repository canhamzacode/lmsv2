import AppLayout from "../../layout/AppLayout";
import { BiPhoneCall, BiUser } from "react-icons/bi";
import InformationBlock from "../../components/InformationBlock";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { FaGenderless } from "react-icons/fa";
import { useAuth } from "../../providers/AuthProvider";
import profile from "../../assets/image/user.jpg";

const StudentProfile = () => {
  const { user } = useAuth();
  return (
    <AppLayout role="student">
      <div className="w-full bg-[#FFF5E5] grid gap-5 md:p-[40px] p-[20px] rounded-md">
        <div className="flex gap-2">
          <div className="h-[50px] w-[50px] bg-slate-300 rounded-[50%]">
            <img src={profile} alt="" className="w-full h-full rounded-[50%]" />
          </div>
          <div>
            <h3 className="text-[#712126] text-xl">{user?.first_name}</h3>
            <p className="text-[#374957]">ID:{user?.id}</p>
          </div>
        </div>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 bg-white rounded-md">
          <InformationBlock
            title="First Name"
            data={user?.first_name as string}
            icon={<BiUser size={25} />}
          />
          <InformationBlock
            title="Last Name"
            data={user?.last_name as string}
            icon={<BiUser size={25} />}
          />
          <InformationBlock
            title="Email"
            data={user?.email as string}
            icon={<AiOutlineMail size={25} />}
          />
          <InformationBlock
            title="Phone Number"
            data="Nill"
            icon={<BiPhoneCall size={25} />}
          />
          <InformationBlock
            title="Address"
            data={user?.address as string}
            icon={<AiOutlineHome size={25} />}
          />
          <InformationBlock
            title="Gender"
            data={user?.gender as string}
            icon={<FaGenderless size={25} />}
          />
        </div>
      </div>
    </AppLayout>
  );
};

export default StudentProfile;
