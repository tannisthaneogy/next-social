import Image from "next/image"
import Link from "next/link"
import { RxCross1, RxCross2, RxCrossCircled } from "react-icons/rx"
import { TiTick } from "react-icons/ti"

const FriendRequests = () => {
    return (
        <div className="flex flex-col gap-4 p-4 bg-[#2a2a30] rounded-lg shadow-md text-xs border-[#404048] border-[1px] text-slate-300">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-400">Friend Requests</span>
                <Link href="/" className="text-[#FEFD03] text-xs">See all</Link>
            </div>
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
                    <span className="font-semibold">Clara Terry</span>
                </div>
                <div className="flex gap-3 justify-end">
                    <Image src="/no.png" alt="" width={20} height={20} className="cursor-pointer"/>
                    <Image src="/cross.png" alt="" width={20} height={20} className="cursor-pointer"/>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
                    <span className="font-semibold">Jeff Nelson</span>
                </div>
                <div className="flex gap-3 justify-end">
                    <Image src="/no.png" alt="" width={20} height={20} className="cursor-pointer"/>
                    <Image src="/cross.png" alt="" width={20} height={20} className="cursor-pointer"/>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/813940/pexels-photo-813940.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
                    <span className="font-semibold">Caroline Watkins</span>
                </div>
                <div className="flex gap-3 justify-end">
                    <Image src="/no.png" alt="" width={20} height={20} className="cursor-pointer"/>
                    <Image src="/cross.png" alt="" width={20} height={20} className="cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}

export default FriendRequests