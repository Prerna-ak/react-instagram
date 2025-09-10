import users from "../Users";
import UserCard from "../components/UserCard";
function Requests() {
  return (
    <>
      <div className="mx-auto w-[400px] mt-12 mb-24">
        <h1 className="text-2xl font-bold">Your Follow requests</h1>
        {users.map((user) => (
          <UserCard
            img={user.image}
            name={user.name}
            prof={user.profession}
            username={user.username}
          />
        ))}
      </div>
    </>
  );
}
export default Requests;
