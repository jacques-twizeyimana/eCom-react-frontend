import Title from "./Title";


export default function Brands() {
  return (
    <div className="mx-16">
      <Title title="Top Brands"></Title>
      <div className="grid grid-cols-5 gap-20  p-8 mb-16 mt-8">
        <div className="w-full h-32 p-4 pt-8 ">
          <img className="w-full" src="/img/lo1.png" />
        </div>
        <div className="w-4/4  h-32  p-3 pt-0">
          <img className="w-full" src="/img/adidas.png"  />
        </div>
        <div className="w-5/6 h-32 p-3  ">
          <img className="w-full " src="/img/vete.png"  />
        </div>
        <div className="w-full  h-28 p-8 pt-10 ">
          <img className="w-" src="/img/supreme.png" />
        </div>
        <div className="w-4/5  h-32 p-4 pt-10 ">
          <img className="w-full" src="/img/lo6.png" />
        </div>
        <div className="w-full  h-32 p-4 ">
          <img className="w-full pl-4" src="/img/samsung.png" />
        </div>
        <div className="w-full  h-32 p-6 pt-3  ">
          <img className="w-full pl-4" src="/img/lo9.png" />
        </div>
        <div className="w-full  h-32 p-6 pt-2 ">
          <img className="w-4/6" src="/img/logo1.png" />
        </div>
        <div className="w-4/5 h-32 p-4 ">
          <img className="w-4/5" src="/img/logo2.png" />
        </div>
        <div className="w-4/5 h-28  ">
          <img className="" src="/img/kfc.png" />
        </div>
      </div>
    </div>
  );
}
