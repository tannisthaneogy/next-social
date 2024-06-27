import Image from "next/image"
import { IoMdMore } from "react-icons/io"
import Comments from "./Comments"

const Post = () => {
    return (
        <div className="flex flex-col gap-4 text-slate-300">
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/25711099/pexels-photo-25711099/free-photo-of-woman-dancing-in-white-dress.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" width={40} height={40} className="w-10 h-10 rounded-full"/>
                    <span className="font-medium">Gussie Ramirez</span>
                </div>
                <IoMdMore className="text-lg cursor-pointer"/>
            </div>
            {/* DESC */}
            <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                    <Image src="https://images.pexels.com/photos/14564141/pexels-photo-14564141.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className="object-cover rounded-md"/>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, deserunt! Praesentium fugit repudiandae, enim quas sed dolorem. Laborum ut id sit quaerat magni hic obcaecati, possimus vero. Obcaecati, veritatis quis!</p>
            </div>
            {/* INTERACTION */}
            <div className="flex items-center justify-between text-sm my-4">
                <div className="flex gap-4">
                    <div className="flex items-center gap-4 bg-[#35353c] p-2 rounded-xl">
                        <Image src="/like.png" alt="" width={16} height={16} className="cursor-pointer"/>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-400">123</span>
                    </div>
                    <div className="flex items-center gap-4 bg-[#35353c] p-2 rounded-xl">
                        <Image src="/comment.png" alt="" width={16} height={16} className="cursor-pointer"/>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-400">123</span>
                    </div>
                </div>
                <div className="">
                    <div className="flex items-center gap-4 bg-[#35353c] p-2 rounded-xl">
                        <Image src="/share.png" alt="" width={16} height={16} className="cursor-pointer"/>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-400">123</span>
                    </div>
                </div>
            </div>
            <Comments/>
        </div>
    )
}

export default Post