import {Link} from 'react-router-dom'
function Feed({img,id}){
    return(
        <>
        <Link to={`/post/${id}`}>
         <img src={img} alt=""  className="w-[260px] h-[400px] object-cover flex-grow " />
        </Link>
       
        </>
    )
}
export default Feed;