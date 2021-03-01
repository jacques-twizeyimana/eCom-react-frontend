import Title from '../homepage/Title'
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
export default function RelatedProduct(){
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
      const [inHover, setHover] = useState(null);
      const [relatedProducts,setRelatedProducts] = useState([
          {
              id:1,
              image:'/img/related-products/shoe1.png',
              name:"Common Project",
              price:"$79.99"
          },
          {
            id:2,
            image:'/img/related-products/shoe2.png',
            name:"Chunk Taylor All Star",
            price:"$79.99"
        },
        {
            id:3,
            image:'/img/related-products/shoe3.png',
            name:"Common Project",
            price:"$79.99"
        },
        {
            id:4,
            image:'/img/related-products/shoe4.png',
            name:"Common Project",
            price:"$79.99"
        },
        {
            id:5,
            image:'/img/related-products/shoe5.png',
            name:"Common Project",
            price:"$79.99"
        }
      ])

    return(
        <div>
            <Title title="Related Products" centered></Title>
            <div className="grid grid-cols-5 auto-rows-auto gap-12 w-full ">
   {relatedProducts.map((product)=>{
      return( <div className="bg-blue-100">
          <div  className="h-72 bg-yellow-100">
           <img src={product.image} alt="" className="h-64 ml-4"/>
           <div className="flex justify-center">
               <div className="w-7 h-6 bg-white ml-2  rounded-full cursor-pointer ">
            <img src="/img/related-products/icons8_eye_52px 2.png" alt="" className="w-4 mt-1 ml-1.5 "/>
            </div>
            <div className="w-7 h-6 bg-white ml-2  rounded-full cursor-pointer ">
           <img src="/img/related-products/icons8_heart_100px_1 2.png" alt="" className="w-4 mt-1 ml-1.5"/>
           </div>
           <div className="w-7 h-6 bg-white ml-2  rounded-full cursor-pointer ">
           <img src="/img/related-products/icons8_shopping_cart_48px_1 1.png" alt="" className="w-4 mt-1 ml-1.5"/>
           </div>
           </div>

           
           </div>
           <div>
            <h1 className="font-black">{product.name}</h1>
            <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <h2>{product.price}</h2>
          </div>
       </div>
      
       )
   })}
      </div>
        </div>
    )
}