import Image from "next/image"
import Link from "next/link"

const Birthdays = () => {
    return (
        <div className="flex flex-col gap-4 p-4 bg-[#2a2a30] rounded-lg shadow-md text-xs border-[#404048] border-[1px] text-slate-300">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-400">Birthdays</span>
            </div>
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
                    <span className="font-semibold">Clara Terry</span>
                </div>
                <div className="flex gap-3 justify-end">
                    <button className="bg-[#FEFD03] text-black text-xs px-2 py-1 rounded-md font-medium">Celebrate</button>
                </div>
            </div>
            {/* UPCOMING */}
            <div className="p-4 bg-[#35353c] rounded-lg flex items-center gap-4">
                <Image src="/gift.png" alt="" width={24} height={24}/>
                <Link href="/" className="flex flex-col gap-1 text-xs">
                    <span className="text-gray-300 font-semibold">Upcoming Birthdays</span>
                    <span className="text-gray-400">See other 16 have upcoming birthdays</span>
                </Link>
            </div>            
        </div>
    )
}

export default Birthdays