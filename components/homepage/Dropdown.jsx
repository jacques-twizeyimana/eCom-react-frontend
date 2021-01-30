import React,{useState} from 'react'

export default function Dropdown() {

  const  CategoriesList=[
    {name:"Food"},
    {name:"Shoes"},
    {name:"Utensils"},
    {name:"Clothes"}
  ]
    
  

  const [isListOpen,setisListOpen]=useState(false)
    return (
        <div>
    <div className="w-1/6">
  <div className=" flex justify-between border-b"  onClick={()=>setisListOpen(!isListOpen)}>
    <div className=" font-bold p-2  " style={{color:"#9E9E9E"}}>Categories</div>
    {isListOpen ? 
    <svg className="m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"/>
      </svg>:
      
      <svg className="m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/>
      </svg>
      }
   
  </div>
 
  {!isListOpen ? null: 
    <ul className="list-none p-2">
      {CategoriesList.map((item)=>(
    <li className="">{item.name}</li>
  
  ))}

  </ul>
  }
 
</div>
        </div>
    )
}
