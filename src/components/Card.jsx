import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion, scale } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.3 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className="w-[170px] h-[200px]  relative rounded-[23px] overflow-hidden text-white p-3 bg-zinc-900/90"
    >
      <FaRegFileAlt />
      <p className="text-xs mt-5 font-semibold  leading-tight">{data.desc}</p>

      <div className="footer absolute bottom-0  w-full    left-0">
        <div className="flex text-sm  py-3 px-4 items-center justify-between">
          <h5>{data.fileSize}</h5>
          <span className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoIosClose size="1em" color="#fff" />
            ) : (
              <LuDownload size=".9em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-3 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } `}
          >
            <h3 className="text-[13px] font-semibold flex items-center justify-center">
              {data.tag.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
