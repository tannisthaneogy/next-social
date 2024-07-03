import prisma from "@/lib/client"
import { User } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"

const UserMediaCard = async ({user}:{user:User}) => {

    const postsWithMedia = await prisma.post.findMany({
        where:{
            userId:user.id,
            img:{
                not:null,
            },
        },
        take:8,
        orderBy:{
            createdAt:"desc",
        },
    });

    return (
        <div className="flex flex-col gap-4 p-4 bg-[#2a2a30] rounded-lg shadow-md text-xs border-[#404048] border-[1px] text-slate-300">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-400">User Media</span>
                <Link href="/" className="text-[#FEFD03] text-xs">See all</Link>
            </div>
            {/* BOTTOM */}
            <div className="flex gap-2 justify-between flex-wrap">
                {postsWithMedia.length ? postsWithMedia.map((post) => (

                    <div className="relative w-1/5 h-20" key={post.id}>
                    <Image src={post.img!} alt="" fill className="object-cover rounded-md"/>
                </div>               
                ))
                : "No Media Found!"}
                       
            </div>
        </div>
    )
}

export default UserMediaCard