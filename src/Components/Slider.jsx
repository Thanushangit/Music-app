import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <>
            <Swiper
                rewind={true}
                modules={[Navigation]}
                className="w-full h-full"
            >
                <SwiperSlide className='w-full h-full flex items-center justify-center '>
                    <div className="border-4 border-amber-300 rounded-full w-64 h-64 md:w-96 md:h-96 overflow-hidden mx-auto mt-8 ">
                        <img src="https://imagecdn.raaga.com/raagaimg/r_img/250/t/t0003506.jpg" alt="image" className="object-center object-cover rounded-full  w-64 h-64 md:w-96 md:h-96" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex items-center justify-center '>
                   
                       <div className='flex items-end justify-center h-full w-full'>
                         <img src="./play.PNG" alt="image" className="object-center object-cover " />
                       </div>
                   
                </SwiperSlide>
                <SwiperSlide className='flex items-center justify-center '>
                   
                       <div className='flex items-end justify-center h-full w-full'>
                         <img src="./3d.PNG" alt="image" className="object-center object-cover " />
                       </div>
                   
                </SwiperSlide>


                {/* <div className="border-4 border-amber-300 rounded-full overflow-hidden ">
                            <img src="https://imagecdn.raaga.com/raagaimg/r_img/250/t/t0003506.jpg" alt="image" className="object-center object-cover rounded-full m-1 w-52 h-52 md:w-full md:h-full" />
                        </div>

                        <div className="h-16 w-full">
                            <img src="./play.PNG" alt="player" className="object-bottom  h-full w-full" />
                        </div> */}
            </Swiper>
        </>
    )
}

export default Slider