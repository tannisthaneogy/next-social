import Image from "next/image"
import { IoMdMore } from "react-icons/io"

const Comments = () => {
    return (
        <div className="">
            {/* WRITE */}
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/26690661/pexels-photo-26690661/free-photo-of-a-blue-and-white-photo-of-an-ice-cave.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt=""  width={32} height={32} className="w-8 h-8 rounded-full"/>
                <div className="flex-1 flex items-center justify-between bg-[#35353c] rounded-xl text-sm px-6 py-2 w-full">
                    <input type="text" placeholder="Write a comment..." className="bg-[#35353c] outline-none flex-1"/>
                    <Image src="/emoji.png" alt="" width={16} height={16} className="cursor-pointer"/>
                </div>
            </div>
            {/* COMMENTS */}
            <div className="">
                {/* COMMENT */}
                <div className="flex gap-4 justify-between mt-6">
                    {/* AVATAR */}
                    <Image src="https://images.pexels.com/photos/26087316/pexels-photo-26087316/free-photo-of-a-woman-in-a-wedding-dress-standing-on-a-rock.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" width={40} height={40} className="w-10 h-10 rounded-full"/>
                    {/* DESC */}
                    <div className="flex flex-col gap-2 flex-1 text-sm">
                        <span>Belle Anderson</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium fuga accusamus pariatur facere quis, iure consectetur ad cumque id aliquid culpa suscipit alias nulla provident ab dolore saepe libero.</p>
                        <div className="flex items-center gap-8 text-xs text-gray-400 mt-2">
                            <div className="flex items-center gap-4">
                                <Image src="/like.png" alt="" width={12} height={12} className="cursor-pointer"/>
                                <span className="text-gray-300">|</span>
                                <span className="text-gray-400">123 Likes</span>
                            </div>
                            <div className="">Reply</div>
                        </div>
                    </div>
                    {/* ICON */}
                    <IoMdMore className="text-lg cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}

export default Comments