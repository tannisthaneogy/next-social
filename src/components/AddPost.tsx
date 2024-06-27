import Image from "next/image"
import { FaImage, FaPoll, FaVideo } from "react-icons/fa"
import { MdEventAvailable } from "react-icons/md"

const AddPost = () => {
    return (
        <div className="p-4 bg-[#2a2a30] shadow-md rounded-lg flex gap-4 justify-between text-sm border-[#404048] border-[1px]">
            {/* AVATAR */}
            <Image src="https://images.pexels.com/photos/26690661/pexels-photo-26690661/free-photo-of-a-blue-and-white-photo-of-an-ice-cave.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" width={48} height={48} className="w-12 h-12 object-cover rounded-full"></Image>
            {/* POST */}
            <div className="flex-1">
                {/* TEXT INPUT */}
                <div className="flex gap-4 text-gray-300">
                    <textarea placeholder="What's on your mind?" className="flex-1 bg-[#35353c] rounded-lg p-2"></textarea>
                    <Image src="/emoji.png" alt="" width={20} height={20} className="w-5 h-5 cursor-pointer self-end"/>
                </div>
                {/* POST OPTIONS */}
                <div className="flex items-center gap-4 mt-4 text-slate-400 flex-wrap">
                    <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors duration-75">
                        <FaImage className="text-lg"/>
                        Photo
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors duration-75">
                        <FaVideo className="text-lg"/>
                        Video
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors duration-75">
                        <FaPoll className="text-lg"/>
                        Poll
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors duration-75">
                        <MdEventAvailable className="text-lg"/>
                        Event
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPost