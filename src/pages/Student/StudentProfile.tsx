import AppLayout from "../../layout/AppLayout";
import { BiPhoneCall, BiUser } from "react-icons/bi";
import InformationBlock from "../../components/InformationBlock";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { FaGenderless } from "react-icons/fa";

const StudentProfile = () => {
  return (
    <AppLayout role="student">
      <div className="w-full bg-[#FFF5E5] grid gap-5 md:p-[40px] p-[20px] rounded-md">
        <div className="flex gap-2">
          <div className="h-[50px] w-[50px] bg-slate-300 rounded-[50%]">
            <img src="" alt="" />
          </div>
          <div>
            <h3 className="text-[#712126] text-xl">Student Name</h3>
            <p className="text-[#374957]">ID:STUD003</p>
          </div>
        </div>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 bg-white rounded-md">
          <InformationBlock
            title="First Name"
            data="Student Name"
            icon={<BiUser size={25} />}
          />
          <InformationBlock
            title="Last Name"
            data="Student Name"
            icon={<BiUser size={25} />}
          />
          <InformationBlock
            title="Username"
            data="Username"
            icon={<BiUser size={25} />}
          />
          <InformationBlock
            title="Email"
            data="email@virtuoussprouts.com"
            icon={<AiOutlineMail size={25} />}
          />
          <InformationBlock
            title="Phone Number"
            data="08012345679"
            icon={<BiPhoneCall size={25} />}
          />
          <InformationBlock
            title="Address"
            data="1, Street Road, LGA, State, Country"
            icon={<AiOutlineHome size={25} />}
          />
          <InformationBlock
            title="Gender"
            data="Male"
            icon={<FaGenderless size={25} />}
          />
        </div>
      </div>
    </AppLayout>
  );
};

export default StudentProfile;
