import React,{useState} from 'react'
import ReactStars from "react-rating-stars-component"
import Dropdown from './Dropdown'
export default function Navigate() {
  const items=[
      {
          id:1,
          name:"Echo Dot 4th",
          price:"$610",
          image:"/img/categories/airpod1.png"
    },
    {
        id:1,
        name:"Echo Dot 4th",
        price:"$610",
        image:"/img/categories/aura1.png"
  },
  {
    id:1,
    name:"Echo Dot 4th",
    price:"$610",
    image:"/img/categories/ga1.png"
},
{
    id:1,
    name:"Echo Dot 4th",
    price:"$610",
    image:"/img/categories/Wifi1.jpg"
},
  ]
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };


    return (
        <div id="top">
        <div className="flex mt-8">
         <div className="w-1/4">
         <div>
         <input
                  className="w-2/4 mx-2 text-lg font-bold placeholder-black text-black bg-transparent focus:outline-none border-b-2 border-red-700"
                  placeholder="Search..."
                  type="text"
                  name="search"
                  id="searchInput"
                />
         </div>
        
         <div className="mt-8">
       
  <Dropdown/>
       
         </div>
        </div>
             <div className="w-4/5">
                 <ul  style={{fontSize:"13px",color:"#BCBCBC"}} className=" h-auto text-center divide-x  links flex space-x-8 justify-center">
                  <li className="p-2  pt-0  pb-0  hover:text-gray-500 active:text-gray-500">Gadgets</li>
                  <li className="p-2  pt-0  pb-0  hover:text-gray-500">Mini</li>
                  <li className="p-2  pt-0  pb-0   hover:text-gray-500">All colors</li>
                  <li className="p-2  pt-0  pb-0  hover:text-gray-500">All brands</li>
                  <li className="p-2 pt-0  pb-0   hover:text-gray-500">America</li>
                 </ul>

            <div className="grid grid-cols-3 gap-8 p-8 mt-24">
                {items.map((item)=>{
                    return(
         <div className="h-96 bg-gray-200  ">
               <div className=" h-48 w-3/4  m-7 ">
              <img className="w-full" src={item.image}/>
              </div>
              <div className="details p-4">
              <p className="font-black text-center p-1" style={{fontSize:"20px"}}>{item.name}</p>
             <div className="flex justify-center">
             <ReactStars 
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
   
            />
             </div>
           
              <p className="font-black text-center">{item.price}</p>
              </div>
            
              </div>

                  )  })}
           
                                             
                </div>
           </div>                 
        </div> 
               
           </div>
    )
}

