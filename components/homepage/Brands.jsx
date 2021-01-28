import Title from "./Title";

export default function Brands() {
  return (
    <div className="mx-16">
      <Title title="Top Brands"></Title>
      <div className="grid grid-cols-5 gap-8 p-8 mb-16 mt-8">
        <div className="w-4/5  h-32 p-4 ">
          <img className="w-full" src="/img/lo1.png" />
        </div>
        <div className="w-4/5  h-32 p-4 ">
          <img className="w-full" src="/img/lo2.png" />
        </div>
        <div className="w-4/5 h-32 p-0 ">
          <img className="w-full" src="/img/lo3.png" />
        </div>
        <div className="w-3/5  h-28 p-4 ">
          <img className="w-" src="/img/lo4.png" />
        </div>
        <div className="w-4/5  h-32 p-4 ">
          <img className="w-full" src="/img/lo6.png" />
        </div>
        <div className="w-4/5  h-32 p-4 ">
          <img className="w-full" src="/img/lo7.png" />
        </div>
        <div className="w-4/6  h-32 p-4 ">
          <img className="w-full" src="/img/lo9.png" />
        </div>
        <div className="w-4/5  h-32 p-4 ">
          <img className="w-4/6" src="/img/logo1.png" />
        </div>
        <div className="w-4/5 h-32 p-4 ">
          <img className="w-4/5" src="/img/logo2.png" />
        </div>
        <div className="w-4/5 h-28 p-4 ">
          <img className="" src="/img/logo3.png" />
        </div>
      </div>
    </div>
  );
}
