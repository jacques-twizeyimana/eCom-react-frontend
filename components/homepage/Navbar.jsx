<<<<<<< HEAD
import {useState} from "react";
import Modal  from 'react-modal';

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [ModelIsOpen,setModelIsOpen]= useState(false);
=======
import { useState } from "react";
import AuthenticationModel from "../Authentication/AuthenticationModel";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [isModalShown, setisModalShown] = useState(false);
  const changeModalShown = (newState = !isModalShown) => {
    setisModalShown(newState);
  };
>>>>>>> 1ccc420d27a36ec57f7b619fca901c40ea613de8
  return (
    <div>
      <AuthenticationModel
        isModalShown={isModalShown}
        changeModalShown={changeModalShown}
      ></AuthenticationModel>
      <div className="w-full border-b border-gray-200 px-5 py-4">
        <nav className="flex-row md:justify-between">
          <div className="flex flex-row justify-between">
            <div>
              <img
                className="hidden pr-2"
                src="/favicon.ico"
                width="30"
                height="30"
              />
              <span className="text-3xl text-black font-bold italic px-3 inline-block font-edo">
                E-SHOP
              </span>
            </div>

            <ul className={"hidden md:flex md:flex-row"} id="mobileMenu">
              <li className="pr-5 my-2 md:my-auto sm:hidden lg:hidden xl:inline-block">
                <a> Home</a>
              </li>
              <li className="pr-5 my-2 sm:hidden lg:inline-block md:my-auto ">
                <a> Shop</a>
              </li>
              <li className="pr-5 my-2 sm:hidden lg:inline-block md:my-auto">
                <a>
                  Latest
                  <sup className={"sm:hidden lg:inline-block "}>
                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-sm ml-1">
                      HOT
                    </span>
<<<<<<< HEAD
                    </sup>
                  </a>
                </li>
                <li className="pr-5 my-2  sm:hidden lg:hidden xl:inline-block md:my-auto">
                  <a> About</a>
                </li>
                <li className="pr-5 my-2  sm:hidden lg:inline-block md:my-auto">
                  <a> Contact</a>
                </li>

                <li className="md:my-auto search border py-1 px-2 border-gray-300 rounded-md ">
                  <svg
                      className="inline"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                  >
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path
                        d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"
                        fill="rgba(52,72,94,1)"
                    />
                  </svg>
                  <input
                      className="mx-2 text-sm placeholder-black text-black bg-transparent focus:outline-none"
                      placeholder="Search here..."
                      type="text"
                      name="search"
                      id="searchInput"
                  />
                </li>
              </ul>

              <div className="hidden md:inline-block login-register">
                <button
                    className="py-1 px-3 border border-black rounded-md hover:bg-black bg-transparent hover:text-white">
                  Register
                </button>
                <button
                    className="ml-5 py-1 px-3 border border-black rounded-md bg-black text-white hover:bg-transparent hover:text-black">
                  Buy now
                </button>
              </div>
              <div className="hidden md:inline-block shopping-data">
                <button className="focus:outline-none relative inline-block">
                  <svg  onClick={()=>setModelIsOpen(true)} 
                      className="inline"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="32"
                      height="32"
                  >
                    <path fill="none" d="M0 0H24V24H0z"/>
                    <path
                        d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"/>
                  </svg>
                </button>
                <sup>
                <span
                    className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-black rounded-full">
                  9
                </span>
                </sup>
                <button className="ml-5 focus:outline-none">
                  <svg
                      className="inline"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="32"
                      height="32"
                  >
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path
                        d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                  </svg>
                  <sup>
                  <span
                      className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-black rounded-full">
                    9
                  </span>
=======
>>>>>>> 1ccc420d27a36ec57f7b619fca901c40ea613de8
                  </sup>
                </a>
              </li>
              <li className="pr-5 my-2  sm:hidden lg:hidden xl:inline-block md:my-auto">
                <a> About</a>
              </li>
              <li className="pr-5 my-2  sm:hidden lg:inline-block md:my-auto">
                <a> Contact</a>
              </li>

              <li className="md:my-auto search border py-1 px-2 border-gray-300 rounded-md ">
                <svg
                  className="inline"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"
                    fill="rgba(52,72,94,1)"
                  />
                </svg>
                <input
                  className="mx-2 text-sm placeholder-black text-black bg-transparent focus:outline-none"
                  placeholder="Search here..."
                  type="text"
                  name="search"
                  id="searchInput"
<<<<<<< HEAD
              />
            </li>
            <li className="my-2 md:my-auto">
              <a> Home</a>
            </li>
            <li className="my-2 md:my-auto">
              <a> Shop</a>
            </li>
            <li className="my-2 md:my-auto">
              <a>
                {" "}
                Latest
                <sup>
                <span
                    className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-sm ml-1">
                  HOT
                </span>
                </sup>
              </a>
            </li>
            <li className="my-2 md:my-auto">
              <button className="py-1">Register</button>
            </li>
            <li className={"my-2"}>
              <button className="py-1">Buy w</button>
            </li>
=======
                />
              </li>
            </ul>
>>>>>>> 1ccc420d27a36ec57f7b619fca901c40ea613de8

            <div className="hidden md:inline-block login-register">
              <button
                className="py-1 px-3 border border-black rounded-md hover:bg-black bg-transparent hover:text-white"
                onClick={() => changeModalShown()}
              >
                Register
              </button>
              <button className="ml-5 py-1 px-3 border border-black rounded-md bg-black text-white hover:bg-transparent hover:text-black">
                Buy now
              </button>
            </div>
            <div className="hidden md:inline-block shopping-data">
              <button className="focus:outline-none relative inline-block">
                <svg
                  className="inline"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                >
                  <path fill="none" d="M0 0H24V24H0z" />
                  <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                </svg>
              </button>
              <sup>
                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-black rounded-full">
                  9
                </span>
              </sup>
<<<<<<< HEAD
            </li>
            <li className="my-2 md:my-auto">
              <button  className="focus:outline-none">
=======
              <button className="ml-5 focus:outline-none">
>>>>>>> 1ccc420d27a36ec57f7b619fca901c40ea613de8
                <svg
                  className="inline"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
                <sup>
<<<<<<< HEAD
                <span
                    className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-black rounded-full">
                  9
                </span>
        
                </sup>
              </button>
            </li>
          </ul>
        </div>

        <Modal className="bg-black flex justify-center h-screen bg-opacity-70 p-12"  style={{zIndex:999}} isOpen={ModelIsOpen}>
            
            <div className="bg-white w-1/2 relative p-2">
            <div onClick={()=>setModelIsOpen(false)}  className=" absolute right-2 text-white text-center text-white rounded rounded-full w-6 h-6 bg-black">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 
            1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
             fill="rgba(255,255,255,1)"/></svg>
            </div>
              <p className="font-bold text-center">My Wishlist </p>
              <div className="flex justify-center p-2">
              <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
               width="36" height="36"><path fill="none" d="M0 0H24V24H0z"/><path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236
               2.265-2.264 5.888-2.34 8.244-.228z" fill="rgba(244,48,48,1)"/></svg>
          
              </div>
              <div className="grid grid-cols-3">
              <div className="w-4/5">
                <div className="bg-gray-200 h-36 w-full m-2 p-2">
                  <img src="/img/products/grey-shoes.png" alt=""/>
                </div>
               <p className="font-bold text-center">Bacca Bucci</p>
               <p className=" text-center p-1.5 text-gray-400 text-sm">Mens Sneakers</p>
               <p className="font-bold text-center text-sm ">$100</p>

               <div className=" w-3/4 bg-black m-4 rounded rounded-lg text-white text-center p-1">
                 <p className="text-sm">Add to Cart</p>
               </div>
               <div className="flex justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                 <path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829
                2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757
                 9.172l1.415-1.415L12 10.586z"/></svg>
               </div>
       
              </div>
              <div className="w-4/5">
                <div className="bg-gray-200 h-36 w-full m-2 p-2">
                  <img src="/img/products/grey-shoes.png" alt=""/>
                </div>
               <p className="font-bold text-center">Bacca Bucci</p>
               <p className=" text-center p-1.5 text-gray-400 text-sm">Mens Sneakers</p>
               <p className="font-bold text-center text-sm ">$100</p>

               <div className=" w-3/4 bg-black m-4 rounded rounded-lg text-white text-center p-1">
                 <p className="text-sm">Add to Cart</p>
               </div>
               <div className="flex justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                 <path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829
                2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757
                 9.172l1.415-1.415L12 10.586z"/></svg>
               </div>
       
              </div>
              <div className="w-4/5">
                <div className="bg-gray-200 h-36 w-full m-2 p-2">
                  <img src="/img/products/grey-shoes.png" alt=""/>
                </div>
               <p className="font-bold text-center">Bacca Bucci</p>
               <p className=" text-center p-1.5 text-gray-400 text-sm">Mens Sneakers</p>
               <p className="font-bold text-center text-sm ">$100</p>

               <div className=" w-3/4 bg-black m-4 rounded rounded-lg text-white text-center p-1">
                 <p className="text-sm">Add to Cart</p>
               </div>
               <div className="flex justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                 <path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829
                2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757
                 9.172l1.415-1.415L12 10.586z"/></svg>
               </div>
       
              </div>
           
           
            
              </div>
            

            
            </div>
            
            
              
            </Modal>
=======
                  <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-black rounded-full">
                    9
                  </span>
                </sup>
              </button>
            </div>

            <div id="hamburgerbtn" className="md:hidden">
              <button
                className={"focus:outline-none"}
                onClick={() => setActive(!active)}
              >
                <svg
                  className="inline"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <ul
          className={
            (active ? "block " : "hidden ") +
            "transition-display md:hidden pt-3 border-t border-gray-300"
          }
          id="mobileMenu"
        >
          <li className="pr-5 my-2 md:my-auto search border py-2 px-3 border-gray-300 rounded-md ">
            <svg
              className="inline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"
                fill="rgba(52,72,94,1)"
              />
            </svg>
            <input
              className=" mx-2 text-sm placeholder-black text-black bg-transparent focus:outline-none"
              placeholder="Search here..."
              type="text"
              name="search"
              id="searchInput"
            />
          </li>
          <li className="my-2 md:my-auto">
            <a> Home</a>
          </li>
          <li className="my-2 md:my-auto">
            <a> Shop</a>
          </li>
          <li className="my-2 md:my-auto">
            <a>
              {" "}
              Latest
              <sup>
                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-sm ml-1">
                  HOT
                </span>
              </sup>
            </a>
          </li>
          <li className="my-2 md:my-auto">
            <button className="py-1">Register</button>
          </li>
          <li className={"my-2"}>
            <button className="py-1">Buy now</button>
          </li>

          <li className="my-2 md:my-auto">
            <button className="focus:outline-none relative inline-block">
              <svg
                className="inline"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
              >
                <path fill="none" d="M0 0H24V24H0z" />
                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
              </svg>
            </button>
            <sup>
              <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-black rounded-full">
                9
              </span>
            </sup>
          </li>
          <li className="my-2 md:my-auto">
            <button className="focus:outline-none">
              <svg
                className="inline"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
              <sup>
                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-black rounded-full">
                  9
                </span>
              </sup>
            </button>
          </li>
        </ul>
>>>>>>> 1ccc420d27a36ec57f7b619fca901c40ea613de8
      </div>
    </div>
  );
}
