import Link from "next/link"
import ProfileCard from "./ProfileCard"
import { BsFilePostFill } from "react-icons/bs"
import { FaShop } from "react-icons/fa6"
import { MdEvent } from "react-icons/md"
import { LuActivitySquare, LuAlbum } from "react-icons/lu"
import { PiVideoFill } from "react-icons/pi"
import { HiNewspaper } from "react-icons/hi"
import { FaListUl, FaPenSquare } from "react-icons/fa"
import { IoMdSettings } from "react-icons/io"
import Ad from "./Ad"

const LeftMenu = ({type}:{type : "home" | "profile"}) => {
    return (
        <div className="flex flex-col gap-6">
            {type === "home" && <ProfileCard/>}
            <div className="p-4 bg-[#2a2a30] rounded-lg shadow-md text-sm text-gray-400 flex flex-col gap-2">
                <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#35353c] transition-all duration-100">
                    <BsFilePostFill/>
                    <span>My Posts</span>
                </Link>
                <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#35353c] transition-all duration-100">
                    <LuActivitySquare/>
                    <span>Activity</span>
                </Link>
                <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#35353c] transition-all duration-100">
                    <FaShop/>
                    <span>Marketplace</span>
                </Link>
                <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#35353c] transition-all duration-100">
                    <MdEvent/>
                    <span>Events</span>
                </Link>
                <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#35353c] transition-all duration-100">
                    <LuAlbum/>
                    <span>Albums</span>
                </Link>
                <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#35353c] transition-all duration-100">
                    <PiVideoFill/>
                    <span>Videos</span>
                </Link>
                <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#35353c] transition-all duration-100">
                    <HiNewspaper/>
                    <span>News</span>
                </Link>
                <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#35353c] transition-all duration-100">
                    <FaPenSquare/>
                    <span>Courses</span>
                </Link>
                <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#35353c] transition-all duration-100">
                    <FaListUl/>
                    <span>Lists</span>
                </Link>
                <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#35353c] transition-all duration-100">
                    <IoMdSettings/>
                    <span>Settings</span>
                </Link>
            </div>
            <Ad size="sm"/>
        </div>
    )
}

export default LeftMenu