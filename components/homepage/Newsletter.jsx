import React from 'react'

export default function Newsletter() {
    return (
        <div className="p-12">
            <h1 className="text-center font-bold p-12" style={{fontSize:"45px"}}>Subscribe to our Newsletter</h1>
           <div className="flex justify-center">
          <input className="p-3 border-2 border-black h-20 w-2/6" type="email" placeholder="ENTER YOUR EMAIL HERE"/>
          <button className="bg-black text-white p-3">SUBSCRIBE</button>
           </div>
        </div>
    )
}
