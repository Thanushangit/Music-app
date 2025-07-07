import SideBarButton from "./SideBarButton"
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaDroplet } from "react-icons/fa6";
import { FaPlay, FaHeart } from "react-icons/fa";
import { IoLibrarySharp } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

const SideBar = () => {
    return (
        <div className="max-h-screen  min-h-screen w-32 bg-[#E99D72] rounded-2xl flex flex-col items-center justify-between p-4">

            {/* it for the profile image  */}
            <div className="w-14 h-14 rounde-full">
                <img src="https://ih1.redbubble.net/image.4660339733.1207/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="profile" className="w-full h-full object-center object-cover rounded-full" />
            </div>

            {/* it for the option to navigate screen  */}
            <div className="flex flex-col items-center justify-center">

                <SideBarButton icon={<BsFillGrid1X2Fill />} title={"Feed"} to={"feed"} />
                <SideBarButton icon={<FaDroplet />} title={"Trending"} to={"treding"} />
                <SideBarButton icon={<FaPlay />} title={"Player"} to={"player"} />
                <SideBarButton icon={<FaHeart />} title={"Favourites"} to={"favourites"} />
                <SideBarButton icon={<IoLibrarySharp />} title={"Library"} to={"/"} />

            </div>

            {/* it for the setting  */}
            <div>
                <button className="flex flex-col group items-center justify-center h-18 w-18 rounded-lg hover:bg-[#ecc9ac] transition-all duration-200">
                    <p className='text-lg'><FiLogOut /></p>
                    <p className='text-[#e9e2dc] group-hover:text-[#f6f4f3] text-sm'>Sign Out</p>
                </button>
            </div>

        </div>
    )
}

export default SideBar