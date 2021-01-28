import React from 'react'
export default function Footer() {
    return (
      <div>
         <div className=" flex justify-center " style={{marginBottom:'-30px'}}>
         <div className=" flex justify-center bg-gray-100 h-16 w-16 p-4  rounded-full ">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
           <path fill="none" d="M0 0h24v24H0z"/>
         <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"/></svg>
         </div>
          </div>
     
        <div className="bg-gray-100 h-96">
         
            <div className="flex h-5/6 ">
              
            <div className=" w-2/6 ">
             <div className="m-16"> 
                <p className="text-3xl text-black font-bold italic px-3 hidden md:inline-block font-edo">E-SHOP</p>
               <p className="mt-8 p-2" style={{fontSize:'15px'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                <p className=" p-2" style={{fontSize:'15px'}}>FAQ's</p>
                </div>
            </div>

             <div className="w-1/5">
             <div className="m-16">
              <h1 className="font-bold" >MENU</h1>
              <ul className="list-none mt-4" style={{fontSize:'15px'}}>
              <li className="pt-3"> <a>Home</a></li>
              <li className="pt-3"><a>Shop</a></li>
            <li className="pt-3">  <a>Latest</a></li>
              <li className="pt-3"><a>About</a></li>
              <li className="pt-3"><a>Contact</a></li>
              </ul>
             </div>

            </div>

            <div className=" w-2/6">
    <div className="m-16">
              <h1 className="font-bold" >HELP</h1>
              <ul className="list-none mt-4 " style={{fontSize:'15px'}}>
              <li className="pt-3"> <a>Shipping information</a></li>
              <li className="pt-3"><a>Return and Exchange</a></li>
            <li className="pt-3">  <a>Terms and Conditions</a></li>
              <li className="pt-3"><a>Privacy Policy</a></li>
              <li className="pt-3"><a>Contact</a></li>
              </ul>
             </div>
            </div>

            <div className="w-2/6">
      <div className="mt-14">
     <h1 className="font-bold text-center">HAVE A QUESTION ?</h1>
     <div className="ml-12 mt-4 " style={{fontSize:'15px'}}>
         <div className="flex relative space-x-12 ">
         <svg className="absolute top-0 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
         <div>
         <p className=" p-1">203 Fake St. Mountain View,</p>
         <p className=" p-1"> San Francisco, California,</p>
         <p className=" p-1"> US</p>

         </div>

         </div>
          <div className="flex relative space-x-12">
         <svg className="absolute bottom-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
             <path fill="none" d="M0 0h24v24H0z"/><path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"/></svg>  
         <p className="p-2">+2 392 3929 210</p>
         </div>
         <div  className="flex relative space-x-12">
         <svg className="absolute bottom-2"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z"/></svg>
         <p className="p-2">info@yourdomain.com</p>

         </div>
     </div>
   
      </div>
            </div>       
         </div>
         <div className="h-1/6 border-t-2 ">
       <p className=" font-medium text-center p-4" style={{fontSize:"13px"}}>Copyright@2021Alright reserved | This template is made with 
       <span className="inline-block pl-1 pr-1">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18" width="15" height="15"><path fill="none" d="M0 0H24V24H0z"/><path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z"/></svg>
           </span>by TheBosses from <span className="text-red-600">OpenRCA</span></p>
         </div>
        </div>
        </div>
    )
}
