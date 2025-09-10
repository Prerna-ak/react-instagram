import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <div className="p-3 border-b border-neutral-300">
            <div className="w-[1200px] mx-auto flex items-center justify-between">
                 <Link to="/" className=" text-2xl font-bold">Instagram</Link>
         <div className=" flex gap-6">
            <Link to="/requests">Requests</Link>
            <Link to="/about">About us</Link>
            
         </div>
            </div>
        
         </div>
        </>
    )
}

export default Navbar;