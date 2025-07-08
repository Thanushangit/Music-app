import { FaRegPlayCircle } from "react-icons/fa";

const MusicCard = ({ song, setSelectedSong, selectedSong, isPlaying }) => {
    const { name, image, desc, duration, id, singers } = song;
    console.log("selectedSong", selectedSong)
    console.log("id", id)
    return (
        <div onClick={() => setSelectedSong(id)} className={`flex items-center gap-3 md:gap-5 border ${id == selectedSong ? "border-[#ceebd3] p-1" : "border-[#225c2d]"} rounded-lg shadow-2xl transition-all hover:scale-[1.01] duration-300 cursor-pointer relative group`}>
            <div className={`w-18 h-18 md:w-24 md:h-24 overflow-hidden  ${id == selectedSong ? "rounded-full" : "rounded-lg"}`}>
                <img src={image} alt="song-image" className={`object-center object-cover w-full h-full ${id == selectedSong ? "rounded-full border-2 border-[#ceebd3]" : "rounded-lg"} ${isPlaying && id == selectedSong ? "rotation" : ""}`} />
            </div>
            <div className="pr-1">
                <h1 className='text-gray-200 font-semibold md:text-xl text-length'>{name} </h1>
                <p className=' text-[#8e9990] text-length'>{singers}</p>
                <div className="flex items-center text-[#8e9990] gap-1">
                    <p className='text-sm text-[#8e9990] max-w-40 text-length'>{desc}</p>
                    <p className='text-sm'>{duration}</p>
                </div>

            </div>
            <div className={`text-4xl text-[#bc7421] opacity-0 group-hover:opacity-100 absolute right-5 bottom-8 transition-opacity duration-300 hover:cursor-pointer ${id == selectedSong ? "hidden" : "bloci"}`}>
                <p><FaRegPlayCircle /></p>
            </div>
        </div>
    )
}

export default MusicCard