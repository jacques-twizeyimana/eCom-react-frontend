import ReactStars from "react-rating-stars-component";
import Title from '../homepage/Title'
export default function HomeAppliances(){
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return(
        <div>
            <Title title="Home Appliances"></Title>
            <div className="grid grid-cols-4 auto-rows-auto gap-12 w-11/12 ml-16 h-5/6">
      <div className="bg-blue-50 text-center ">
        <img src="/img/home-appliance1.png" alt="kfc" />
        <div className="pt-16 "
       >
         
        <h1 className="font-black uppercase ">Seti Appliance</h1>
        <div className="rate-star ml-20">
        <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
   
            /> 
        </div>
        <h1 className="font-black">$150.00</h1>
        <div className="bg-black text-white py-4 mt-8">See More</div>
        </div>
      </div>
      <div className="bg-blue-50 text-center">
        <img src="/img/home-appliance2.png" alt="makeup" />
        <div  className="pt-16"
      >
        <h1 className="font-extrabold uppercase ">Seti Appliance</h1>
        <div className="rate-star ml-20">
        <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
   
            /> 
        </div>
        <h1 className="font-black">$150.00</h1>
        <div className="bg-black text-white py-4 mt-8">See More</div>
        </div>
      </div>
      <div className="bg-blue-50 text-center">
        <img src="/img/home-appliance3.png" alt="watch" />
        <div  className="pt-16"
       >
        <h1 className="font-extrabold uppercase ">Seti Appliance</h1>
        <div className="rate-star ml-20">
        <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
   
            /> 
        </div>
        <h1 className="font-black">$150.00</h1>
        <div className="bg-black text-white py-4 mt-8">See More</div>
        </div>
      </div >
      <div className="bg-blue-50  text-center">
        <img src="/img/home-appliance4.png" alt="" />
        <div className="pt-16"
        >
        <h1 className="font-extrabold uppercase">Seti Appliance</h1>
        <div className="rate-star ml-20">
        <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
   
            /> 
        </div>
        <h1 className="font-black">$150.00</h1>
        <div className="bg-black text-white py-4 mt-8">See More</div>

        </div>
      </div>
    </div>
        </div>
    )
}