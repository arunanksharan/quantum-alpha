import Image from "next/image"
import React from "react"
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md"

const itemData = [
  {
    id: 1,
    notification: "🔥 Available Now!",
    title: "How to use the new version of the admin dashboard?",
    subtitle: "Takes 4 minutes to learn",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero perspiciatis recusandae possimus.",

    buttonText: "Watch",
    buttonIcon: <MdPlayCircleFilled />,
    image: "/astronaut.png",
  },
  {
    id: 2,
    notification: "🚀 Coming Soon! ",
    title:
      "New server actions are available, partial pre-rendering is coming up!",
    subtitle: "Boost your productivity",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero perspiciatis recusandae possimus.",
    buttonText: "Learn",
    buttonIcon: <MdReadMore />,
    image: "",
  },
]

const Rightbar = () => {
  return (
    <div className="rightbar-container fixed">
      {itemData.map((item, index) => (
        <div
          key={index}
          className="rightbar-item bg-gradient-to-t from-[#182237] to-[#253352] p-5 px-6 rounded-lg mb-5 relative"
        >
          <div className="background absolute right-0 bottom-0 w-1/2 h-1/2">
            <Image
              className="object-contain opacity-20"
              src={item.image}
              alt=""
              fill
            />
          </div>
          <div className="itemtext flex flex-col gap-6">
            <span className="notification font-bold">{item.notification}</span>
            <h3 className="title">{item.title}</h3>
            <span className="subtitle text-textSoft text-xs">
              {item.subtitle}
            </span>
            <p className="description text-textSoft text-md">
              {item.description}
            </p>
            <button className="p-3 flex items-center gap-3 w-max bg-[#5d57c9] text-white border-0 rounded-md cursor-pointer">
              {item.buttonIcon}
              {item.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Rightbar
