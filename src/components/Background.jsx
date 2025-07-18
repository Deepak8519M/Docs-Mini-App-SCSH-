import React from "react";

function Background() {
  return (
    <>
      <div className="w-full h-screen fixed z-2">
        <div className="w-full py-7 flex justify-center text-zinc-500 text-xl  font-semibold absolute top-[5%] ">
          Documents.
        </div>
        <h1 className="text-zinc-900  text-[13vw] leading-none tracking-normal font-semibold absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default Background;
