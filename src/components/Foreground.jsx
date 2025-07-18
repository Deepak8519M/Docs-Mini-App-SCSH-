import React, { useRef, useState } from "react";
import Card from "./Card";
import { FaPlus } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";

function Foreground() {
  const ref = useRef(null);
  const [openForm, setOpenForm] = useState(false); // Start with form closed
  const [formData, setFormData] = useState({
    desc: "",
    fileSize: "",
    close: true,
    tagTitle: "",
    tagColor: "green",
    isOpen: true,
  });
  const [cards, setCards] = useState([
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "close" || name === "isOpen" ? value === "true" : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      desc: formData.desc || "New item",
      fileSize: formData.fileSize,
      close: formData.close,
      tag: {
        isOpen: formData.isOpen,
        tagTitle: formData.tagTitle || "New Tag",
        tagColor: formData.tagColor,
      },
    };
    setCards((prev) => [...prev, newCard]);
    setFormData({
      desc: "",
      fileSize: "",
      close: false,
      tagTitle: "",
      tagColor: "green",
      isOpen: true,
    });
    setOpenForm(false); // Close form after submission
  };

  return (
    <div className="relative w-full h-screen">
      <div
        ref={ref}
        className="fixed top-0 left-0 z-[3] w-full h-screen flex gap-8 flex-wrap p-5"
      >
        {cards.map((item, index) => (
          <Card key={index} data={item} reference={ref} />
        ))}
      </div>

      {openForm && (
        <div className="w-[300px] h-[340px] bg-white absolute bottom-[110px] right-5 z-[10] shadow-lg rounded-md">
          <IoIosClose
            onClick={() => setOpenForm(false)}
            className="text-[30px] absolute top-2 right-2 cursor-pointer"
          />
          <form
            onSubmit={handleSubmit}
            className="p-4 flex flex-col gap-3 mt-6"
          >
            <input
              type="text"
              name="desc"
              value={formData.desc}
              onChange={handleInputChange}
              placeholder="Description"
              className="w-full border-2 border-black p-1 rounded"
            />
            <input
              type="text"
              name="fileSize"
              value={formData.fileSize}
              onChange={handleInputChange}
              placeholder="File size (e.g., .9mb)"
              className="w-full border-2 border-black p-1 rounded"
            />
            <div className="flex justify-between items-center gap-2">
              <input
                type="text"
                name="tagTitle"
                value={formData.tagTitle}
                onChange={handleInputChange}
                placeholder="Tag title"
                className="w-[50%] border-2 border-black p-2 rounded"
              />
              <div className="flex w-[50%] items-center justify-between ">
                <label className="text-[12px] font-bold">Status</label>
                <select
                  name="close"
                  value={formData.close}
                  onChange={handleInputChange}
                  className="w-[70%] border-2 text-[14px] border-black p-2 rounded"
                >
                  <option value={true}>True</option>
                  <option value={false}>False</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-[12px] font-bold">TagColor</label>
              <select
                name="tagColor"
                value={formData.tagColor}
                onChange={handleInputChange}
                className=" border-2 w-[80%]  border-black p-2 rounded"
              >
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-[12px] font-bold">Visibility</label>
              <select
                name="isOpen"
                value={formData.isOpen}
                onChange={handleInputChange}
                className=" w-[80%] border-2 border-black p-1 rounded"
              >
                <option value={true}>True</option>
                <option value={false}>False</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
            >
              Submit
            </button>
          </form>
        </div>
      )}

      <div
        className="fixed flex items-center justify-center bottom-4 right-4 rounded-full bg-gray-700 text-white w-[80px] h-[80px] cursor-pointer z-[40]"
        onClick={() => setOpenForm(!openForm)}
      >
        <FaPlus className="text-[40px]" />
      </div>
    </div>
  );
}

export default Foreground;
