import user from "../assets/image/user.jpg";
interface CollectionProps {
  title: string;
}
const CollectionCard = ({ title }: CollectionProps) => {
  return (
    <div className="w-full mx-auto h-[75vh] overflow-y-auto bg-[#FFF5E5] rounded-[10px] p-[30px] flex flex-col gap-[25px] ">
      <div className="w-full flex justify-between ">
        <p>{title}</p>
        <p>95</p>
      </div>
      <div className="w-full flex flex-col gap-[10px] ">
        <div className="w-full flex gap-[25px] justify-between items-center">
          <div className="w-[50px] h-[50px]">
            <img src={user} alt="" className="w-full h-full rounded-[50%]" />
          </div>
          <p className="text-[#712126]">
            Shafii Zakariyah <span className="text-[#374957]">Creche</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
