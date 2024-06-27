import Image from "next/image"
import { IoMdMore } from "react-icons/io"

const Ad = ({ size }:{ size: "sm" | "md" | "lg" }) => {
    return (
        <div className="p-4 bg-[#2a2a30] rounded-lg shadow-md text-xs border-[#404048] border-[1px] text-slate-300">
            {/* TOP */}
            <div className="flex items-center justify-between text-gray-500 font-medium">
                <span>Sponsored Ads</span>
                <IoMdMore className="text-lg cursor-pointer"/>
            </div>
            {/* BOTTOM */}
            <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
                <div className={`relative w-full ${ size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
                    <Image src="https://images.pexels.com/photos/2290786/pexels-photo-2290786.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" fill className="rounded-lg object-cover"/>
                </div>
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/2290786/pexels-photo-2290786.jpeg?auto=compress&cs=tinysrgb&w=800" width={24} height={24} alt="" className="rounded-full w-6 h-6 object-cover"/>
                    <span className="text-[#FEFD03] font-medium">Jeff's Soda</span>
                </div>
                <p className={size === "sm" ? "text-xs" : "text-sm"}>
                    {size == "sm" ? "Lorem ipsum dolor sit maet consectetur adipisicing elit." : size === "md" ? "Lorem ipsum dolor sit maet consectetur adipisicing elit. Lorem ipsum dolor sit maet consectetur adipisicing elit." : "Lorem ipsum dolor sit maet consectetur adipisicing elit. Lorem ipsum dolor sit maet consectetur adipisicing elit. Lorem ipsum dolor sit maet consectetur adipisicing elit."}
                </p>
                <button className="bg-[#35353c] text-gray-500 p-2 text-xs rounded-lg hover:bg-[#404049] transition-colors duration-100">Learn more</button>
            </div>
        </div>
    )
}

export default Ad