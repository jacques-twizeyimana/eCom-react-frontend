import Home from "./Home";



function BestSeller(){
return(
<div className="flex ml-8">
    <div className="best-sellers w-60 h-72 mr-12">
     <div>
        <img src="./img/kfc.png" className="w-52 h-32"/>
       
      <div className="best-seller-des mt-4 w-52 bg-gray-300">
          <h2>KFC</h2>
          <p>Is the best seller in the food category for it's delicious taste it provides to our customers</p>
      </div>
      </div>
    </div>
    <div className="best-sellers w-60 h-72  mr-12">
       <div>
        <img src="./img/wa4.jpg" className="w-52 h-32"/>
     
      <div className="best-seller-des mt-4 w-52 bg-gray-300">
          <h2>KFC</h2>
          <p>Is the best seller in the food category for it's delicious taste it provides to our customers</p>
      </div>
      </div>
    </div>
    <div className="best-sellers w-60 h-72 mr-12">
        <div>
        <img src="./img/wa4.jpg" className="w-52 h-32"/>
       
      <div className="best-seller-des mt-4 w-52">
          <h2>Apple Watch</h2>
          <p>Is the best seller in the food category for it's delicious taste it provides to our customers</p>
      </div>
      </div>
 
    </div>
    <div className="best-sellers w-60 h-72 mr-12">
    <div>
        <img src="./img/con2.jpg" className="w-52 h-32"/>
    
      <div className="best-seller-des mt-4 w-52">
          <h2>KFC</h2>
          <p>Is the best seller in the food category for it's delicious taste it provides to our customers</p>
      </div>
      </div>
 
    </div>
</div>
)
}

export default BestSeller;