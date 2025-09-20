import { Link } from "react-router-dom";
function UserCard({ img, name, prof, username }) {
  return (
    <>
      <Link to={`/${username}`} className="hover:cursor-pointer">
        <div className=" w-[450px] flex justify-between items-center border  border-neutral-300 rounded-xl m-2.5 px-3 py-1">
          <div className="flex gap-5 items-center m-2">
            <img
              src={img}
              alt=""
              className="h-14 w-14 rounded-full object-cover "
            />
            <div>
              <p>{name}</p>
              <p className="text-sm text-neutral-600">{prof}</p>
            </div>
          </div>
          <p className="border border-neutral-400 px-3 py-1 rounded-md bg-neutral-300 text-neutral-800">
            Follow
          </p>
        </div>
      </Link>
    </>
  );
}
export default UserCard;
