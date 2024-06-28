import Image from "next/image"

const ProfileCard = () => {
    return (
        <div className="p-4 bg-[#2a2a30] rounded-lg shadow-md text-sm flex flex-col gap-6">
            <div className="h-20 relative">
                <Image src="https://images.pexels.com/photos/26146562/pexels-photo-26146562/free-photo-of-a-mountain-covered-in-fog-and-clouds.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className="rounded-md object-cover"/>
                <Image src="https://images.pexels.com/photos/25568891/pexels-photo-25568891/free-photo-of-a-woman-in-a-leopard-print-dress-and-hat.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" width={48} height={48} className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-[#FEFD03] z-10"/>
            </div><div className="h-24 flex flex-col gap-2 items-center text-gray-400">
                <span className="font-semibold mt-2">Elizabeth Cross</span>
                <div className="flex items-center gap-4">
                    <div className="flex">
                        <Image src="https://images.pexels.com/photos/24375005/pexels-photo-24375005/free-photo-of-young-brunette-posing-among-tropical-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" width={12} height={12} className="rounded-full object-cover w-3 h-3 "/>
                        <Image src="https://images.pexels.com/photos/19718703/pexels-photo-19718703/free-photo-of-young-woman-in-a-white-shirt-sitting-at-a-desert.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" width={12} height={12} className="rounded-full object-cover w-3 h-3 "/>
                        <Image src="https://images.pexels.com/photos/21758772/pexels-photo-21758772/free-photo-of-rock-formations-in-cappadocia-in-turkey.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" width={12} height={12} className="rounded-full object-cover w-3 h-3 "/>
                    </div>
                    <span className="text-xs text-gray-400">500 Followers</span>
                </div>
                <button className="bg-[#FEFD03] text-black text-xs p-2 rounded-md">My Profile</button>
            </div>
        </div>
    )
}

export default ProfileCard