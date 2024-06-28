import Feed from "@/components/Feed"
import LeftMenu from "@/components/LeftMenu"
import RightMenu from "@/components/RightMenu"
import Image from "next/image"

const ProfilePage = () => {
    return (
      <div className='flex gap-6 pt-6'>
      <div className="hidden xl:block w-[20%]"><LeftMenu type="profile"/></div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-52 relative">
              <Image src="https://images.pexels.com/photos/26146562/pexels-photo-26146562/free-photo-of-a-mountain-covered-in-fog-and-clouds.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className="rounded-md object-cover" />
              <Image src="https://images.pexels.com/photos/25568891/pexels-photo-25568891/free-photo-of-a-woman-in-a-leopard-print-dress-and-hat.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" width={96} height={96} className="w-24 h-24 rounded-full absolute left-0 right-0 m-auto -bottom-12 ring-4 ring-[#FEFD03] object-cover" />
            </div>
            <h1 className="mt-16 mb-4 text-2xl font-medium text-gray-400">Elizabeth Cross</h1>
            <div className="flex items-center justify-center gap-12 mb-4 text-gray-400">
              <div className="flex flex-col items-center">
                <span className="font-medium">20</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">500</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">241</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed/>
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="test"/>
      </div>
    </div>
    )
  }
  
  export default ProfilePage