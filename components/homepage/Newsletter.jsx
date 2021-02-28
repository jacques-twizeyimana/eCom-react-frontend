export default function Newsletter() {
  return (
    <div className="p-12 grid grid-cols-1">
      <h1 className="text-center font-bold p-12" style={{ fontSize: "45px" }}>
        Subscribe to our Newsletter
      </h1>
      <div className="flex justify-center">
        <input
          className="p-3 border-2 border-black h-16 sm:w-full md:w-2/6 focus:rounded-none"
          type="email"
          placeholder="ENTER YOUR EMAIL HERE"
        />
        <button className="bg-black text-white p-3">SUBSCRIBE</button>
      </div>
    </div>
  );
}
