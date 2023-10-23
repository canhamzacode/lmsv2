import CollectionCard from "../../components/CollectionCard";
import AppLayout from "../../layout/AppLayout";

const Admin = () => {
  return (
    <AppLayout>
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-[30px] justify-center items-center grid-cols-1 ">
        <CollectionCard title="Student" />
        <CollectionCard title="Teachers" />
        <CollectionCard title="Classes" />
      </div>
    </AppLayout>
  );
};

export default Admin;
