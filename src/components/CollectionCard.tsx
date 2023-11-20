import { Link } from "react-router-dom";
import user from "../assets/image/user.jpg";
interface CollectionProps<T> {
  title: string;
  data: T[] | undefined;
  id: String[] | undefined;
}

const CollectionCard = <
  T extends { email: string; first_name: string; class_to_teach: string }
>({
  title,
  data,
  id,
}: CollectionProps<T>) => {
  return (
    <div className="w-full mx-auto h-[75vh] overflow-y-auto bg-[#FFF5E5] rounded-[10px]   flex flex-col gap-[25px] ">
      <div className="w-full flex p-[20px] justify-between ">
        <h3 className="font-bold text-xl">{title}</h3>
        <p>{data?.length}</p>
      </div>
      <div className="w-full flex flex-col gap-[2px] ">
        {data?.map((teacher, index) => (
          <div
            key={teacher.email}
            className="w-full flex px-[20px] py-[10px] bg-slate-100 hover:bg-slate-300 flex-wrap justify-between items-center"
          >
            <div className="w-[50px] h-[50px]">
              <img src={user} alt="" className="w-full h-full rounded-[50%]" />
            </div>
            <div className="grid items-center text-right justify-center">
              <Link to={id ? `/teacher/${id[index]}` : "#"}>
                <p className="text-[#712126] capitalize">
                  {teacher.first_name}
                </p>
              </Link>
              <p className="text-[#374957] capitalize">
                {teacher.class_to_teach}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionCard;
