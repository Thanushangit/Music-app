import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { songsData } from '../assets/assets.js';
import WaveForm from '../Visualizer/WaveForm';

const Slider = ({ selectedSong, audioRef,isPlaying }) => {
    const [analyzerData, setAnalyzerData] = useState(null);
    const audioCtxRef = useRef(null);

    useEffect(() => {
        if (!audioRef?.current) return;

        // Only create AudioContext and MediaElementSourceNode once
        if (!audioCtxRef.current) {
            audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
        }
        const audioCtx = audioCtxRef.current;

        // Resume context on play (required by browsers)
        const resumeCtx = () => {
            if (audioCtx.state === "suspended") {
                audioCtx.resume();
            }
        };
        audioRef.current.addEventListener("play", resumeCtx);

        // Attach analyzer and source only once
        if (!audioRef.current._analyzer) {
            const analyzer = audioCtx.createAnalyser();
            analyzer.fftSize = 128;
            const bufferLength = analyzer.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);

            const source = audioCtx.createMediaElementSource(audioRef.current);
            source.connect(analyzer);
            analyzer.connect(audioCtx.destination);

            audioRef.current._analyzer = analyzer;
            audioRef.current._bufferLength = bufferLength;
            audioRef.current._dataArray = dataArray;
        }

        setAnalyzerData({
            analyzer: audioRef.current._analyzer,
            bufferLength: audioRef.current._bufferLength,
            dataArray: audioRef.current._dataArray,
        });

        // Cleanup event listener only
        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener("play", resumeCtx);
            }
        };
    }, [audioRef]);

    return (
        <Swiper rewind={true} modules={[Navigation]} className="w-full h-full">
            <SwiperSlide className='w-full h-full flex items-center justify-center '>
                <div className={`flex items-center justify-center rounded-full w-64 h-64 md:w-96 md:h-96 overflow-hidden shadow-2xl mx-auto mt-6.5 md:mt-8.5 p-1  ${isPlaying? "card" : ""}`}>
                    <img src={songsData[selectedSong]?.image} alt="image" className="object-center object-cover rounded-full w-full h-full" />
                </div>
            </SwiperSlide>
            <SwiperSlide id='wave' className=' h-full w-full'>
                <div className='flex items-end w-full h-full'>
                    {analyzerData && (
                        <WaveForm analyzerData={analyzerData} />
                    )}
                    
                </div>

            </SwiperSlide>
           
        </Swiper>
    );
};

export default Slider;