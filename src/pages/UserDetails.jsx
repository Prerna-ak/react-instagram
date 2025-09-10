import users from "../Users";
import { useParams } from "react-router-dom";
import Feed from "../components/Feed";
function UserDetails() {
  let { username } = useParams();
  let user = users.find((user) => user.username == username);
  return (
    <>
    <div className="mx-auto w-[1000px]">
      <div className="mx-auto w-[600px] mt-14 mb-14 flex gap-5 items-center">
        <div className="w-1/4">
          <img
            src={user.image}
            alt=""
            className="h-38 w-38 rounded-full object-cover"
          />
        </div>
        <div className="w-3/4">
       
          <h1 className="text-2xl font-bold ">{user.name}</h1>
          
          <h1>{user.profession}</h1>
          <p>{user.description}</p>

          <div className=" flex gap-3 mt-2">
            <div className="bg-neutral-200 rounded-md px-3 py-1">
              {user.followers} Followers
            </div>
            <div className="bg-neutral-200 rounded-md px-3 py-1">
              {user.following} Following
            </div>
          </div>
        </div>
      </div>
 
      <div className="w-[900px] mx-auto">
        <div className="flex flex-wrap gap-2 justify-center">
               {
            user.posts.map(post=> <Feed img={post.image} id={post.id} />)
          }
        </div>
          
      </div>
      </div>
    </>
  );
}
export default UserDetails;
