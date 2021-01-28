import Title from "./Title";

export default function Electronics() {
  return (
    <div className="mx-16">
      <Title title="Electronics"></Title>
      <div className={"m-10 flex items-center h-96"}>
        <div className="flex-1 p-5 border-2 h-full">swiper</div>
        <div className="my-10 px-20 bg-black text-white p-5 w-1/2 h-full flex flex-col justify-center">
          <h1 className="font-weight-bold mb-10 text-2xl font-bold">
            Technology Related
          </h1>
          <p>
            Lorem ipsum dolor sit amet, ut consectetur adipiscing elit, sed do
            eiusmod tempor incididunt labore et dolore magna aliqua.{" "}
          </p>
          <button className="mt-10 bg-white text-black w-1/2 mx-auto rounded h-10 font-bold">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
}
