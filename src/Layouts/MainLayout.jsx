import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import Navbar from "../Components/Navbar";
import MusicCard from "../Components/MusicCard";
import { IoShuffle, IoShareSocialOutline } from "react-icons/io5";
import { MdSkipNext, MdSkipPrevious, MdLoop } from "react-icons/md";
import { IoMdPlay, IoMdPause } from "react-icons/io";
import { FaRegHeart,FaHeart  } from "react-icons/fa";


const MainLayout = () => {
    const [status, setStatus] = useState(true);
    const[heart,setHeart]=useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setStatus(false);
            navigate('/');
        }, 4350);

        return () => clearTimeout(timer);
    })

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
                <div className="flex flex-col md:flex-row md:h-[75vh] border border-purple-600">
                    <div className="hidden md:flex mycontainer musiccard w-1/2 h-full overflow-y-auto  flex-col gap-2 border border-gray-400">
                        <MusicCard />
                        <MusicCard />
                        <MusicCard />
                        <MusicCard />
                        <MusicCard />
                        <MusicCard />
                        <MusicCard />
                        <MusicCard />
                        <MusicCard />
                        <MusicCard />
                        <MusicCard />
                        <MusicCard />

                    </div>


                    <div className="w-full md:w-1/2  h-full flex items-center justify-center gap-10 flex-col overflow-hidden border border-red-500">
                        <div className="border-4 border-amber-300 rounded-full overflow-hidden ">
                            <img src="https://imagecdn.raaga.com/raagaimg/r_img/250/t/t0003506.jpg" alt="image" className="object-center object-cover rounded-full m-1 w-52 h-52 md:w-full md:h-full" />
                        </div>

                        <div className="h-16">
                            <img src="./play.PNG" alt="player" className="object-bottom object-contain" />
                        </div>
                    </div>
                </div>

                <footer className="mt-2 relative  flex flex-col-reverse md:flex-row items-center justify-between gap-y-3">
                    <div className="flex items-center gap-3 ">
                        <img src="https://imagecdn.raaga.com/raagaimg/r_img/250/t/t0003506.jpg" alt="image" className="w-12 h-12 md:w-16 md:h-16 object-center object-cover" />
                        <div className="max-w-56">
                            <h1 className='text-gray-200 font-semibold text-lg md:text-xl text-length'>Ean Eandral Lorem ipsum dolor sit amet. </h1>
                            <p className=' text-[#8e9990] text-length'>Haricharan,shakthisree,gopanlan</p>
                            <p className='text-sm text-[#8e9990] text-length'>ithu eanna maayam </p>

                        </div>
                    </div>

                    <div className="flex flex-col items-center  md:absolute left-1/2 top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-[500px]">
                        <div className="h-1 md:h-2 w-full bg-amber-5 bg-amber-50 rounded-full cursor-pointer">
                            <div className="h-1 md:h-2 w-2/3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between w-full text-gray-50 ">
                            <p className="text-sm text-[#9cb7a2]">02:18</p>
                            <p className="text-sm text-[#9cb7a2]">05:45</p>
                        </div>
                        <div className="text-gray-100 text-xl md:text-3xl flex gap-5 ">
                            <button title="Shuffle" className="cursor-pointer"><IoShuffle /></button>
                            <button title="Previous" className="cursor-pointer"><MdSkipPrevious /></button>
                            <button title="Play" className="cursor-pointer"><IoMdPlay /></button>
                            {/* <button title="Pause" className="cursor-pointer"><IoMdPause /></button> */}
                            <button title="Next" className="cursor-pointer"><MdSkipNext /></button>
                            <button title="Repeat" className="cursor-pointer"><MdLoop /></button>
                        </div>
                    </div>

                    <div className="hidden md:flex text-gray-100 text-2xl  gap-5 ">
                        <button title="Share" className="cursor-pointer"><IoShareSocialOutline /></button>
                        <button title="Favourite" className="cursor-pointer" onClick={()=>setHeart(!heart)}>{heart?<FaRegHeart />:<FaHeart />}</button>
                    </div>
                </footer>
            </div>
            }
        </>



    )
}

export default MainLayout