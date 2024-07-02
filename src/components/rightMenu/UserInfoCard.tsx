import prisma from "@/lib/client"
import { auth } from "@clerk/nextjs/server"
import { User } from "@prisma/client"
import Link from "next/link"
import { CiCalendarDate } from "react-icons/ci"
import { IoIosLink } from "react-icons/io"
import { IoLocationSharp } from "react-icons/io5"
import { MdOutlineWork } from "react-icons/md"
import { RiGraduationCapFill } from "react-icons/ri"
import UserInfoCardInteraction from "./UserInfoCardInteraction"

const UserInfoCard = async ({user}:{user:User}) => {

    const createdAtDate = new Date(user.createdAt);
    const formattedDate = createdAtDate.toLocaleDateString("en-US",{
        year:"numeric",
        month:"long",
        day:"numeric"
    });

    let isUserBlocked = false;
    let isFollowing = false;
    let isFollowingSent = false;

    const {userId:currentUserId} = auth()

    if(currentUserId){
        const blockRes = await prisma.block.findFirst({
            where:{
                blockerId:currentUserId,
                blockedId:user.id,
            }
        })
        blockRes ? (isUserBlocked = true) : (isUserBlocked = false);

        const followRes = await prisma.follower.findFirst({
            where:{
                followerId:currentUserId,
                followingId:user.id,
            }
        })
        followRes ? (isFollowing = true) : (isFollowing = false);

        const followReqRes = await prisma.followRequest.findFirst({
            where:{
                senderId:currentUserId,
                receiverId:user.id,
            }
        })
        followReqRes ? (isFollowingSent = true) : (isFollowingSent = false);
    }

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
                    <span className="text-xl text-gray-300 font-medium">{(user.name && user.surname) ? user.name + " " + user.surname : user.username}</span>
                    <span className="text-sm">@{user.username}</span>
                </div>
                {user.description && <p>{user.description}</p>}
                {user.city && <div className="flex items-center gap-2">
                    <IoLocationSharp/>
                    <span>Living in <b>{user.city}</b></span>
                </div>}
                {user.school && <div className="flex items-center gap-2">
                    <RiGraduationCapFill/>
                    <span>Went to <b>{user.school}</b></span>
                </div>}
                {user.work && <div className="flex items-center gap-2">
                    <MdOutlineWork/>
                    <span>Works at <b>{user.work}</b></span>
                </div>}
                <div className="flex items-center justify-between">
                    {user.website && <div className="flex gap-1 items-center">
                        <IoIosLink/>
                        <Link href={user.website} className="font-medium text-[#FEFD03]">{user.website}</Link>
                    </div>}
                    <div className="flex gap-1 items-center text-xs">
                        <CiCalendarDate/>
                        <span>Joined {formattedDate}</span>
                    </div>
                </div>
                <UserInfoCardInteraction userId={user.id} currentUserId={currentUserId} isUserBlocked={isUserBlocked} isFollowing={isFollowing} isFollowingSent={isFollowingSent}/>
            </div>
        </div>
    )
}

export default UserInfoCard