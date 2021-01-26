import { useState } from "react"

export default function Banner() {
    const [hidden,setHidden] = useState(false)
    return (
        <div className={"p-2 px-4 bg-black text-gray-300 relative " + (hidden ? ' hidden ':'')}>
            <p className="font-bold text-center text-sm">Free international shipping over $50</p>
            <button onClick={() =>setHidden(true)} className="absolute right-4 top-2 text-gray-500 focus:outline-none hover:text-red-400">x</button>
        </div> 
    )
}