import React from "react";
import Card from "./Card";

function Foreground() {
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];

  return (
    <div className="w-full h-screen fixed top-0 left-0 z-[3] flex gap-8 flex-wrap p-5  ">
      {data.map((item, index) => (
        <Card data={item} />
      ))}
    </div>
  );
}

export default Foreground;
