import Image from "next/image"
import Link from "next/link"

const UserMediaCard = ({userId}:{userId:string}) => {
    return (
        <div className="flex flex-col gap-4 p-4 bg-[#2a2a30] rounded-lg shadow-md text-xs border-[#404048] border-[1px] text-slate-300">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-400">User Media</span>
                <Link href="/" className="text-[#FEFD03] text-xs">See all</Link>
            </div>
            {/* BOTTOM */}
            <div className="flex gap-2 justify-between flex-wrap">
                <div className="relative w-1/5 h-20">
                    <Image src="https://images.pexels.com/photos/17584582/pexels-photo-17584582/free-photo-of-head-of-eating-giraffe.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className="object-cover rounded-md"/>
                </div>                
                <div className="relative w-1/5 h-20">
                    <Image src="https://images.pexels.com/photos/26082925/pexels-photo-26082925/free-photo-of-antalya-patara.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className="object-cover rounded-md"/>
                </div>                
                <div className="relative w-1/5 h-20">
                    <Image src="https://images.pexels.com/photos/19962749/pexels-photo-19962749/free-photo-of-autumn-leaves-around-bench-in-park.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className="object-cover rounded-md"/>
                </div>                
                <div className="relative w-1/5 h-20">
                    <Image src="https://images.pexels.com/photos/26725674/pexels-photo-26725674/free-photo-of-a-toucan-sitting-on-a-branch.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className="object-cover rounded-md"/>
                </div>                
                <div className="relative w-1/5 h-20">
                    <Image src="https://images.pexels.com/photos/25945658/pexels-photo-25945658/free-photo-of-yellow-swim-ring-on-water-in-pool.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className="object-cover rounded-md"/>
                </div>                
                <div className="relative w-1/5 h-20">
                    <Image src="https://images.pexels.com/photos/25745504/pexels-photo-25745504/free-photo-of-olive-oil-and-wine-on-a-cutting-board.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className="object-cover rounded-md"/>
                </div>                
                <div className="relative w-1/5 h-20">
                    <Image src="https://images.pexels.com/photos/25649820/pexels-photo-25649820/free-photo-of-view-of-the-milan-cathedral-in-milan-lombardy-italy.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className="object-cover rounded-md"/>
                </div>                
                <div className="relative w-1/5 h-20">
                    <Image src="https://images.pexels.com/photos/26131247/pexels-photo-26131247/free-photo-of-hand-holding-a-white-blooming-flower.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className="object-cover rounded-md"/>
                </div>                
            </div>
        </div>
    )
}

export default UserMediaCard