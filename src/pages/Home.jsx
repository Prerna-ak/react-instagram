import Story from "./Story";
import users from "../Users";

function Home(){
    return(
        <>
        <div className="mt-6 mx-auto w-[60%]">
      <h1 className="text-lg font-bold mb-3 text-pink-600">Stories</h1>
      <Story users={users} />
    </div>
        
      
       
        </>
    )
}
export default Home; 