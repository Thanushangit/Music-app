import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom"
import Navbar from "../Components/Navbar";
import MusicCard from "../Components/MusicCard";
import { IoShuffle, IoShareSocialOutline } from "react-icons/io5";
import { MdSkipNext, MdSkipPrevious, MdLoop } from "react-icons/md";
import { IoMdPlay, IoMdPause } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Slider from "../Components/Slider";
import { songsData } from "../assets/assets.js";


const MainLayout = () => {
    const [status, setStatus] = useState(true);
    const [heart, setHeart] = useState(false);
    const [selectedSong, setSelectedSong] = useState("0");
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setStatus(false);
            navigate('/');
        }, 4350);

        return () => clearTimeout(timer);
    }, [])

    useEffect(() => {
        if (audioRef.current && isPlaying) {
            audioRef.current.play();
        }
    }, [selectedSong]);


    const handlePlayPause = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    const handleNext = () => {
        setSelectedSong((prev) => (prev + 1 < songsData.length ? prev + 1 : 0));
    };

    const handlePrevious = () => {
        setSelectedSong((prev) => (prev - 1 >= 0 ? prev - 1 : songsData.length - 1));
    };



    return (
        <>

            {status && <div className="h-screen w-full overflow-hidden bg-black text-gray-50 flex items-center justify-center">
                <video
                    src="/open.mp4"
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-center md:object-cover object-contain"
                />
            </div>}


            {!status && <div className="mycontainer h-screen w-full overflow-hidden bg-gradient-to-br from-[#1DB954] via-[#282727] to-[#4c4040] ">
                <Navbar />
                <div className="flex flex-col-reverse md:flex-row  h-[85vh] md:h-[75vh]">
                    <div className="flex mycontainer musiccard w-full md:w-1/2 h-full overflow-y-auto  flex-col gap-2 ">
                        {songsData.map((song) => {
                            return (
                                <MusicCard key={song.id} song={song} setSelectedSong={setSelectedSong} selectedSong={selectedSong} isPlaying={isPlaying} />
                            )
                        })}

                    </div>


                    <div className="w-full md:w-1/2  h-full  overflow-hidden">
                        <Slider selectedSong={selectedSong} />
                    </div>


                </div>

                <footer className="mt-2 relative   flex flex-col-reverse md:flex-row items-center justify-between gap-y-3">
                    <div className="hidden md:flex items-center gap-3 ">
                        <img src={songsData[selectedSong]?.image} alt="image" className="w-12 h-12 md:w-16 md:h-16 object-center object-cover" />
                        <div className="max-w-56">
                            <h1 className='text-gray-200 font-semibold text-lg md:text-xl text-length'>{songsData[selectedSong]?.name} </h1>
                            <p className=' text-[#8e9990] text-length'>{songsData[selectedSong]?.desc}</p>
                            <p className='text-sm text-[#8e9990] text-length'>{songsData[selectedSong]?.singers}</p>

                        </div>
                    </div>

                    <div className="mycontainer flex flex-col items-center fixed md:-bottom-10 bottom-0  right-0 z-20  md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-[500px]  bg-black md:bg-transparent  ">
                        {/* <audio src={songsData[selectedSong]?.file} preload ></audio> */}
                        <div className="h-1 md:h-2 w-full bg-amber-5 bg-amber-50 rounded-full cursor-pointer">
                            <div className="h-1 md:h-2 w-2/3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between w-full text-gray-50 ">
                            <p className="text-sm text-[#9cb7a2]">--:--</p>
                            <p className="text-sm text-[#9cb7a2]">{songsData[selectedSong]?.duration}</p>
                        </div>
                        <audio ref={audioRef} src={songsData[selectedSong]?.file} preload="metadata" />

                        <div className="flex items-center gap-4 text-3xl text-white">
                            <button><MdLoop /></button>
                            <button onClick={handlePrevious}><MdSkipPrevious /></button>

                            {isPlaying ? (
                                <button onClick={handlePlayPause}><IoMdPause /></button>
                            ) : (
                                <button onClick={handlePlayPause}><IoMdPlay /></button>
                            )}

                            <button onClick={handleNext}><MdSkipNext /></button>

                            <button><IoShuffle /></button>
                        </div>

                    </div>

                    <div className="hidden md:flex text-gray-100 text-2xl  gap-5 ">
                        <button title="Share" className="cursor-pointer"><IoShareSocialOutline /></button>
                        <button title="Favourite" className="cursor-pointer" onClick={() => setHeart(!heart)}>{heart ? <FaRegHeart /> : <FaHeart />}</button>
                    </div>
                </footer>
            </div>
            }
        </>



    )
}

export default MainLayout