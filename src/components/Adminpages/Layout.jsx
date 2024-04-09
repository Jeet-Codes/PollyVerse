import React, { useEffect, useState } from 'react'
import InAppLoader from '../loader/InAppLoader';
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { BiLogOutCircle } from "react-icons/bi";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { CiSaveUp2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import Headder from '../Headder';
// import Headder from './Headder';
export default function Layout({children}) {

  document.title = "HR -[Placement Module]";
  const [isLoading,setisLoading]=useState(false);
  const menus = [
    { name: "Home", link: "/home", icon: MdOutlineDashboard },
    { name: "Profile", link: "/profile", icon: AiOutlineUser },
    { name: "Messages", link: "/message", icon: FiMessageSquare },
    
    { name: "Drag and Drop", link: "/drag", icon: FiFolder },
    { name: "Saved", link: "/save", icon: CiSaveUp2 },
    { name: "Setting", link: "/setting", icon: RiSettings4Line },
    { name: "Logout", link: "/", icon: BiLogOutCircle },
  ];
  const [open, setOpen] = useState(true);
  
  useEffect(() => {
    setisLoading(true);
    setTimeout(()=>{
    setisLoading(false)
    },200)
}, [])


  return (
    <>
    {
      isLoading?
      <InAppLoader/>
      :
      <>
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
         
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className=" text-xl text-gray-900 bg-white w-full font-semibold">
        {children}
      </div>
    </section>
    </>
     }
    </>
  )
}