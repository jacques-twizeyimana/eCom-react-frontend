import { useState } from "react";

export default function Navbar() {
    const [active,setActive]= useState(false)
    return (
        <div>
        <div className="w-full border-b border-gray-50 px-5 py-4">
            <nav className="flex-row md:justify-between">
                <div className="flex flex-row justify-between">
                    <div>
                        <img className="inline-block hidden" src="/favicon.ico" width="30" height="30" />
                        <span className="text-3xl text-black font-bold italic px-3 hidden md:inline-block font-edo">E-SHOP</span>
            
                    </div>
            
                    <ul className={"md:flex md:flex-row"} id="mobileMenu">
                        <li className="pr-5 my-2 md:my-auto"><a> Home</a></li>
                        <li className="pr-5 my-2 md:my-auto"><a> Shop</a></li>
                        <li className="pr-5 my-2 md:my-auto"><a> Latest
                        <sup>
                            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-sm ml-1">HOT</span></sup>
                        </a>
                        </li>
                        <li className="pr-5 my-2 md:my-auto"><a> About</a></li>
                        <li className="pr-5 my-2 md:my-auto"><a> Contact</a></li>
                    </ul>
                    <div className="search border-b border-gray-600 ">
                        <svg  className="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z" fill="rgba(52,72,94,1)"/></svg>
                        <input  className=" mx-2 py-1 text-sm placeholder-black text-black bg-transparent focus:outline-none" placeholder="Search here..." type="text" name="search" id="searchInput"/>
                    </div>

                    <div className="inline-block login-register">                
                        <button className="py-1 px-3 border border-black rounded-md hover:bg-black bg-transparent hover:text-white">Register</button>
                        <button className="ml-5 py-1 px-3 border border-black rounded-md bg-black text-white hover:bg-transparent hover:text-black">Buy now</button>
                    </div>
                    <div className="inline-block shopping-data">
                        <button className="focus:outline-none relative inline-block">
                            <svg className="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0H24V24H0z"/><path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"/></svg></button>
                            <sup><span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-black rounded-full">9</span></sup>
                        <button className="ml-5 focus:outline-none">
                            <svg className="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
                            <sup><span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-black rounded-full">9</span></sup>
                        </button>
                    </div>

                    <div id="hamburgerbtn" className="md:hidden">
                        <button onClick={()=> setActive(!active)}><svg className="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"/></svg></button>
                    </div>
                </div>
            </nav>
</div>
</div>

        
    )
}