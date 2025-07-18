import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

function Card() {
  return (
    <div className="w-[170px] h-[200px]  relative rounded-[23px] overflow-hidden text-white p-3 bg-zinc-900/90">
      <FaRegFileAlt />
      <p className="text-xs mt-5 font-semibold  leading-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>

      <div className="footer absolute bottom-0  w-full    left-0">
        <div className="flex text-sm  py-3 px-4 items-center justify-between">
          <h5>.4mb</h5>
          <span className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
            <LuDownload size=".9em" color="#fff" />
          </span>
        </div>
        <div className="tag w-full py-3 bg-green-600">
          <h3 className="text-[13px] font-semibold flex items-center justify-center">
            Downlodad Now
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
