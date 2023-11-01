import AppLayout from "../../layout/AppLayout";
import Hero from "../../assets/image/student-hero.png";

const User = () => {
  return (
    <AppLayout role="user">
      <div className="w-full grid justify-center items-center max-w-[500px] mx-auto gap-5 ">
        <div>
          <img src={Hero} alt="" />
        </div>
        <div>
          <h3 className="text-2xl text-[#FFF5E5] text-center">
            “A person who seeks knowledge has the ability to achieve anything
            that he or she wishes for.”
          </h3>
        </div>
      </div>
    </AppLayout>
  );
};

export default User;
