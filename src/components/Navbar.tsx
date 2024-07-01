import Link from "next/link"
import Image from "next/image"
import MobileMenu from "./MobileMenu"
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { GoHome } from "react-icons/go"
import { LiaUserFriendsSolid } from "react-icons/lia";
import { TbCirclePlus2 } from "react-icons/tb";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoLogInOutline } from "react-icons/io5"

const Navbar = () => {
    return (
        <div className="h-16 flex items-center justify-between bg-[#2a2a30] rounded-lg px-6">
            {/* LEFT */}
            <div className="md:hidden lg:block w-[15%]">
                <Link href="/" className="font-bold text-xl text-[#FEFD03]">INSBUZZ</Link>
            </div>
            {/* CENTER */}
            <div className="hidden md:flex w-[60%] text-sm items-center justify-between">
                {/* LINKS */}
                <div className="flex gap-6 text-gray-400">
                    <Link href='/' className="flex items-center gap-2">
                        {/* <Image src="/home.png" alt="Homepage" width={16} height={16} className="w-4 h-4"/> */}
                        <GoHome className="text-lg text-[#FEFD03]"/>
                        <span>Homepage</span>
                    </Link>
                    <Link href='/' className="flex items-center gap-2">
                        {/* <Image src="/friends.png" alt="Friends" width={16} height={16} className="w-4 h-4"/> */}
                        <LiaUserFriendsSolid className="text-xl text-[#FEFD03]"/>
                        <span>Friends</span>
                    </Link>
                    <Link href='/' className="flex items-center gap-2">
                        {/* <Image src="/stories.png" alt="Stories" width={16} height={16} className="w-4 h-4"/> */}
                        <TbCirclePlus2 className="text-lg text-[#FEFD03]"/>
                        <span>Stories</span>
                    </Link>
                </div>
                <div className="hidden xl:flex p-2 bg-[#35353c] items-center rounded-xl text-gray-400">
                    <input type="text" placeholder="search..." className="bg-[#35353c] outline-none" />
                    <Image src="/search.png" alt="" width={14} height={14}/>
                </div>
            </div>
            {/* RIGHT */}
            <div className="w-[25%] flex items-center gap-4 xl:gap-8 justify-end">
                <ClerkLoading>
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"></div>
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <div className="cursor-pointer">
                            {/* <Image src="/people.png" alt="" width={24} height={24}/> */}
                            <LiaUserFriendsSolid className="text-2xl text-[#FEFD03]"/>
                        </div>
                        <div className="cursor-pointer">
                            {/* <Image src="/messages.png" alt="" width={20} height={20}/> */}
                            <AiOutlineMessage className="text-xl text-[#FEFD03]"/>
                        </div>
                        <div className="cursor-pointer">
                            {/* <Image src="/notifications.png" alt="" width={20} height={20}/> */}
                            <IoMdNotificationsOutline className="text-2xl text-[#FEFD03]"/>
                        </div>
                        <UserButton/>
                    </SignedIn>
                    <SignedOut>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <IoLogInOutline className="text-lg text-[#FEFD03]"/>
                            <Link href="/sign-in">Login/Register</Link>
                        </div>
                    </SignedOut>
                </ClerkLoaded>
                <MobileMenu/>
            </div>
        </div>
    )
}

export default Navbar