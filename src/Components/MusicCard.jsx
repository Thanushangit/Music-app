import { FaRegPlayCircle } from "react-icons/fa";

const MusicCard = () => {
    return (
        <div className='flex items-center gap-3 md:gap-5 border border-[#559260] rounded-lg shadow-2xl transition-all hover:scale-[1.01] duration-300 cursor-pointer relative group'>
            <div className='w-18 h-18 md:w-24 md:h-24 overflow-hidden rounded-lg'>
                <img src="https://s.saregama.tech/image/c/fw_485/8/7e/d6/love-hits-mashup-1440-x-1440_1640158040.jpg" alt="song-image" className='object-center object-cover w-full h-full rounded-lg' />
            </div>
            <div className="pr-1">
                <h1 className='text-gray-200 font-semibold md:text-xl text-length'>Ean Eandral </h1>
                <p className=' text-[#8e9990] text-length'>Haricharan,shakthisree,gopanlan </p>
                <div className="flex items-center text-[#8e9990] gap-1">
                    <p className='text-sm text-[#8e9990] text-length'>ithu eanna maayam </p>
                    <p className='text-sm'>4.56</p>
                </div>

            </div>
            <div className="text-4xl text-[#bc7421] opacity-0 group-hover:opacity-100 absolute right-5 bottom-8 transition-opacity duration-300 hover:cursor-pointer">
                <p><FaRegPlayCircle /></p>
            </div>
        </div>
    )
}

export default MusicCard