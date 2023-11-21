import { useAuth } from "../providers/AuthProvider";

const StudentHeader = () => {
  const { user } = useAuth();
  return (
    <div>
      <h3 className="text-2xl">Hello {user?.first_name}</h3>
      {/* <div className="grid text-center">
          <p>Class</p>
          <h4>{user?.grade}</h4>
        </div> */}
    </div>
  );
};

export default StudentHeader;
