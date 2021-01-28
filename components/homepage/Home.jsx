import styles from "../../styles/Home.module.css";
export default function Home() {
  return (
    <div className={"w-full py-24 px-5 " + styles.home}>
      <div className="grid sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-2">
        <div className="sm:col-span-4 md:col-span-2 lg:col-span-1 content px-3 sm:px-6 md:px-12 lg:px-15 xl:px-24 ">
          <p className="text-white text-3xl font-black">
            SATISFY YOUR NEEDS <span className="block mt-3">THROUGH US</span>{" "}
          </p>
          <p className="text-gray-300 text-lg text-left mt-12">
            Often, the body paragraph demonstrates and develops your topic
            sentence through many things and its your choice to decide the best.
          </p>

          <div className="mt-12 text-left">
            <button className="text-lg text-gray-300  bg-black font-bold font-mo-bold rounded-md py-3 px-4 focus:outline-none hover:bg-gray-800">
              SHOP NOW &rarr;
            </button>
          </div>
        </div>
        <div className="slide-controls hidden md:block md:col-span-1 lg:col-span-1 my-auto">
          <div className="text-right my-4">
            <button className="text-sm rounded-full w-6 h-6 focus:outline-none text-white border border-white hover:bg-black hover:border-black">
              1
            </button>
          </div>
          <div className="text-right my-4">
            <button className="text-sm rounded-full w-6 h-6 focus:outline-none text-white border border-white hover:bg-black hover:border-black">
              2
            </button>
          </div>
          <div className="text-right my-4">
            <button className="text-sm rounded-full w-6 h-6 focus:outline-none text-white border border-white hover:bg-black hover:border-black">
              3
            </button>
          </div>
          <div className="text-right my-4">
            <button className="text-sm rounded-full w-6 h-6 focus:outline-none text-white border bg-black border-black hover:bg-transparent hover:border-white">
              4
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
