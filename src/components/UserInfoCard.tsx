import Link from "next/link"
import { CiCalendarDate } from "react-icons/ci"
import { IoIosLink } from "react-icons/io"
import { IoLocationSharp } from "react-icons/io5"
import { MdOutlineWork } from "react-icons/md"
import { RiGraduationCapFill } from "react-icons/ri"

const UserInfoCard = ({userId}:{userId:string}) => {
    return (
        <div className="flex flex-col gap-4 p-4 bg-[#2a2a30] rounded-lg shadow-md text-xs border-[#404048] border-[1px] text-slate-300">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-400">User Information</span>
                <Link href="/" className="text-[#FEFD03] text-xs">See all</Link>
            </div>
            {/* BOTTOM */}
            <div className="flex flex-col gap-4 text-gray-400">
                <div className="flex flex-col gap-1">
                    <span className="text-xl text-gray-300 font-medium">Elizabeth Cross</span>
                    <span className="text-sm">@elizabethcross</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse iste similique error.</p>
                <div className="flex items-center gap-2">
                    <IoLocationSharp/>
                    <span>Living in <b>Denver</b></span>
                </div>
                <div className="flex items-center gap-2">
                    <RiGraduationCapFill/>
                    <span>Went to <b>Edgar High School</b></span>
                </div>
                <div className="flex items-center gap-2">
                    <MdOutlineWork/>
                    <span>Works at <b>Apple Inc.</b></span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-1 items-center">
                        <IoIosLink/>
                        <Link href="/" className="font-medium text-[#FEFD03]">elizabeth.dev</Link>
                    </div>
                    <div className="flex gap-1 items-center text-xs">
                        <CiCalendarDate/>
                        <span>Joined Nov'24</span>
                    </div>
                </div>
                <button className="bg-[#d5d53c] text-[#2a2a30] rounded-md text-sm p-2  font-medium">Follow</button>
                <span className="text-red-500 cursor-pointer text-xs self-end">Block User</span>
            </div>
        </div>
    )
}

export default UserInfoCard