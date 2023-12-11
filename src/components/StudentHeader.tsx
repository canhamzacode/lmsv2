import { useAuth } from "../providers/AuthProvider";

const StudentHeader = () => {
  const { user } = useAuth();
  return (
    <div>
      <h3 className="text-2xl">Hello {user?.first_name}</h3>
    </div>
  );
};

export default StudentHeader;
