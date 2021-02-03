import React,{useState} from 'react'

export default function Dropdown() {
const Links=[
  {
    linkname:"Categories",
    isOpen:false,
    sublinks:[
        {name:"Food"},
        {name:"Shoes"},
        {name:"Utensils"},
        {name:"Clothes"}
       ]},
       {
        linkname:"Shoes",
        isOpen:false,
           sublinks:[
            {name:"Food"},
            {name:"Shoes"},
            {name:"Utensils"},
            {name:"Clothes"}
           ]},
           {
            linkname:"Electronic",
            isOpen:false,
               sublinks:[
                {name:"Food"},
                {name:"Shoes"},
                {name:"Utensils"},
                {name:"Clothes"}
               ]},
]
  const  CategoriesList=[
    {name:"Food"},
    {name:"Shoes"},
    {name:"Utensils"},
    {name:"Clothes"}
  ]

  Links.map(link=>{
    console.log("current link name", link.linkname)
  })


  // const isOpenHandler =(isopen)=>{
  
  //    isopen= !isopen;
  //    console.log(isopen);
  // }

  const [listOpen,setisListOpen]=useState(false)
  const [isListOpen2,setisListOpen2]=useState(false)
  const [isListOpen3,setisListOpen3]=useState(false)
  const [isListOpen4,setisListOpen4]=useState(false)
  const [isListOpen5,setisListOpen5]=useState(false)
  const [isListOpen6,setisListOpen6]=useState(false)
  
    return (
      <div className="mt-24 w-5/6">


<div className=" border-b p-4"  onClick={()=>setisListOpen2(!isListOpen2)}>
  <div className="flex justify-between">
  <div className=" font-bold   " style={{color:"#9E9E9E"}}>Categories</div>

  {isListOpen2 ? 
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
<path fill="none" d="M0 0h24v24H0z"/>
<path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"/>
</svg> :

<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
<path fill="none" d="M0 0h24v24H0z"/>
<path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/>
</svg>
}
  </div>



</div>

{!isListOpen2 ? null: 
<ul className="list-none p-2">
{CategoriesList.map((item)=>(
<li className="p-2 pl-5">{item.name}</li>

))}

</ul>

}


<div className=" border-b p-4"  onClick={()=>setisListOpen3(!isListOpen3)}>
  <div className="flex justify-between">
  <div className=" font-bold   " style={{color:"#9E9E9E"}}>Size</div>

  {isListOpen3 ? 
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
<path fill="none" d="M0 0h24v24H0z"/>
<path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"/>
</svg> :

<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
<path fill="none" d="M0 0h24v24H0z"/>
<path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/>
</svg>
}
  </div>



</div>

{!isListOpen3 ? null: 
<ul className="list-none p-2">
{CategoriesList.map((item)=>(
<li className="p-2 pl-5">{item.name}</li>

))}

</ul>

}



<div className=" border-b p-4"  onClick={()=>setisListOpen4(!isListOpen4)}>
  <div className="flex justify-between">
  <div className=" font-bold   " style={{color:"#9E9E9E"}}>Gender</div>

  {isListOpen4 ? 
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
<path fill="none" d="M0 0h24v24H0z"/>
<path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"/>
</svg> :

<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
<path fill="none" d="M0 0h24v24H0z"/>
<path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/>
</svg>
}
  </div>



</div>

{!isListOpen4 ? null: 
<ul className="list-none p-2">
{CategoriesList.map((item)=>(
<li className="p-2 pl-5">{item.name}</li>

))}

</ul>

}



<div className=" border-b p-4"  onClick={()=>setisListOpen5(!isListOpen5)}>
  <div className="flex justify-between">
  <div className=" font-bold   " style={{color:"#9E9E9E"}}>Brand</div>

  {isListOpen5 ? 
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
<path fill="none" d="M0 0h24v24H0z"/>
<path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"/>
</svg> :

<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
<path fill="none" d="M0 0h24v24H0z"/>
<path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/>
</svg>
}
  </div>



</div>

{!isListOpen5 ? null: 
<ul className="list-none p-2">
{CategoriesList.map((item)=>(
<li className="p-2 pl-5">{item.name}</li>

))}

</ul>

}



<div className=" border-b p-4"  onClick={()=>setisListOpen6(!isListOpen6)}>
  <div className="flex justify-between">
  <div className=" font-bold   " style={{color:"#9E9E9E"}}>Location</div>

  {isListOpen6 ? 
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
<path fill="none" d="M0 0h24v24H0z"/>
<path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"/>
</svg> :

<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
<path fill="none" d="M0 0h24v24H0z"/>
<path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/>
</svg>
}
  </div>



</div>

{!isListOpen6 ? null: 
<ul className="list-none">
{CategoriesList.map((item)=>(
<li className="p-2 pl-5">{item.name}</li>

))}

</ul>

}


{/*       
      {Links.map(link=>
  
        
        <div className="  border-b p-4"  onClick={()=>isOpenHandler(link.isOpen)}>
          <div className="flex  justify-between">
        <div className=" font-bold   " style={{color:"#9E9E9E",fontSize:"15px"}}>{link.linkname}</div> 
        
       {link.isOpen ? 
        <svg className=" " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"/>
          </svg> :
          
          <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/>
          </svg>
          
          }
       </div>
            {!link.isOpen ?console.log(link.linkname): 
              <ul className="list-none p-2">
                {link.sublinks.map((item)=>(
              <li className="">{item.name}</li>

            ))}

            </ul>

            } 
  </div> */}
    


    
    </div>
    
)
    
  }
    

