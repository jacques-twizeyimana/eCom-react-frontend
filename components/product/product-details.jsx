export default function ProductDetails(){
    return (
        <div className={"container-fluid p-0 m-0 "}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 pr-20">
                <div className="bg-gray-300 py-8 pl-1 pr-12">
                    <div className="grid grid-cols-5">
                        <div className="view-product-images border-b border-t border-gray-400">
                            <div className="px-0 py-1 border border-gray-300 hover:border-gray-400">
                                <img className={"w-full block"} src="/img/products/grey-shoes.png" alt=""/>
                            </div>
                            <div className="px-0 py-1 border border-gray-300 hover:border-gray-400">
                                <img className={"w-full block"} src="/img/products/grey-shoes.png" alt=""/>
                            </div>
                            <div className="px-0 py-1 border border-gray-300 hover:border-gray-400">
                                <img className={"w-full block"} src="/img/products/grey-shoes.png" alt=""/>
                            </div>
                        </div>
                        <div className="product-main-img col-span-4 px-3">
                            <img className={"w-full block"} src="/img/products/grey-shoes.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="details pl-20 py-7 pr-4">
                    <h2 className="font-bold text-2xl">Common Achilles Sneakers</h2>
                    <div className="desc my-10">
                        <p className="font-light test-sm text-gray-600">Seamlessly empower fully researched growth strategy and interoperable internal. It was found in the 2016 through its leather innovations.</p>
                    </div>
                    <div className="size-color my-12 grid grid-cols-2">
                        <div className="text-left">
                            <span className="text-light test-sm pr-2 text-gray-500">Size:</span>
                            <select name="size" id="product-size" className={"font-bold border border-gray-400 rounded-md px-4 py-1 bg-transparent"}>
                                <option value="M">Medium</option>
                                <option value="XS">Extra small</option>
                                <option value="S">Small</option>
                                <option value="L">Large</option>
                                <option value="XL">Extra large</option>
                            </select>
                        </div>
                        <div className="text-right">
                            <span className="text-light test-sm pr-2 text-gray-500">Color:</span>
                            <select name="size" id="product-size" className={"font-bold border border-gray-400 rounded-md px-4 py-1 bg-transparent"}>
                                <option value="M">Grey</option>
                                <option value="XS">Blue</option>
                                <option value="S">Red</option>
                                <option value="L">Green</option>
                            </select>
                        </div>
                    </div>
                    <div className="category-- my-12 grid grid-cols-2">
                        <div className="text-left">
                            <span className="text-light test-sm pr-3 text-gray-500 font-sans test-sm">Category:</span>
                            <span className="font-bold font-sans test-sm">Shoes</span>
                        </div>
                        <div className="text-left">
                            <span className="text-light test-sm pr-3 text-gray-500 font-sans test-sm">Location:</span>
                            <span className="font-bold font-sans test-sm">Rwanda</span>
                        </div>
                        <div className="text-left">
                            <span className="text-light font-sans test-sm pr-3 text-gray-500 test-sm">Availability:</span>
                            <span className="font-bold font-sans test-sm">In Stock</span>
                        </div>
                        <div className="text-left">
                            <span className="text-light test-sm pr-3 text-gray-500 font-sans test-sm">Promotions::</span>
                            <span className="font-bold font-sans test-sm">Location:</span>
                        </div>
                    </div>
                    <div className="add-to-cart-- my-12 grid grid-cols-2">
                        <div className="text-left">
                            <button className={"px-4 py-2 bg-black text-gray-300 rounded-md"}>Add to cart</button>
                        </div>
                        <div className="text-right">
                            <span className={"bg-gray-200 py-2"}>
                                <button className={"px-2 py-2 bg-gray-300"}>+</button>
                                <span className={"px-4 bg-gray-200"}>8</span>
                                <button className={"px-2 py-2 bg-gray-300"}>-</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2">
                <div className="description md:border-r border-gray-400">
                    <h2 className="text-md font-black text-center">Description</h2>
                    <p className="px-10 py-10 text-sm">When the total number of protons in a macroscopic body equals the well
                        total number of electrons, the total charge is zero and the body as a great
                        whole is electrically neutral. To give a body an excess negative
                        charge, we may either add negative charges to a neutral body remove positive in and charges from that body. Similarly, we can create an
                        excess positive really charge by either adding positive charge removing negative and in charge.
                    </p>
                </div>
                <div className="add-review">
                    <h2 className="text-md font-black text-center">Add a review</h2>
                    <div className="px-10 py-10 ">
                        <div className="">
                            <label htmlFor="message">Review</label>
                            <textarea name="message" id="message" className={"p-4 rounded-md focus:border-blue-400 focus:outline-none  resize-none h-32 block w-full border border-gray-300"}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}