import React from 'react'

function Story({users}) {
  return (
    <>
    
    <div className="flex gap-4 p-4 overflow-x-auto">
      {users.map((user) => (
        <div  className="flex flex-col items-center">
          <div className="p-[2px] rounded-full  outline-2  outline-pink-600 ">
            <img
              src={user.image}
              alt={user.name}
              className="w-24 h-24 rounded-full border-2 border-white object-cover"
            />
          </div>
          <p className="text-xs mt-2">{user.name}</p>
        </div>
      ))}
    </div>
  

    
    
    </>
  )
}

export default Story;
