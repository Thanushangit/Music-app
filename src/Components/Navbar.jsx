import { BsHeadphones } from "react-icons/bs";
const Navbar = () => {
    return (
        <div className="flex items-center justify-between border border-gray-400">
            <div className="flex items-center justify-center text-xl md:text-3xl text-gray-300 gap-1 font-saira font-bold">
                <h1> <BsHeadphones /></h1>
                <h1>Tunify Music</h1>
            </div>

            <div className="flex items-center justify-center gap-4">
                <button className="hidden md:block py-2 px-6 border-0 bg-gray-100 text-green-700 rounded-full font-semibold hover:bg-gray-200 cursor-pointer transition-all duration-300">Download App</button>
                <div className="w-10 h-10  flex items-center justify-center overflow-hidden rounded-full cursor-pointer ">
                    <img src="./faviIcon.png" alt="profile" className="object-center object-contain" />
                </div>
            </div>
        </div>
    )
}

export default Navbar