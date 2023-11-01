import AppLayout from "../../layout/AppLayout";
import CollectionCard from "../../components/CollectionCard";

const Teacher = () => {
  return (
    <AppLayout role="teacher">
      <div className="w-full grid md:grid-cols-2 gap-[30px] justify-center items-start grid-cols-1 ">
        <CollectionCard title="Student" />
        <div className=" h-full relative">
          <div className="w-full flex items-end justify-end gap-[25px] text-[#fff5e5]">
            <div className="text-center ">
              <h3 className="text-xl">Students</h3>
              <h2 className="text-2xl">23</h2>
            </div>
            <div className="text-center">
              <h3 className="text-xl">Class</h3>
              <h2 className="text-2xl">Creche</h2>
            </div>
          </div>
          <h3 className="text-2xl text-[#FFF5E5] p-4 border-r-4  border-b-4 absolute bottom-0 right-0">
            “Teaching is the greatest act of optimism.”
          </h3>
        </div>
      </div>
    </AppLayout>
  );
};

export default Teacher;
