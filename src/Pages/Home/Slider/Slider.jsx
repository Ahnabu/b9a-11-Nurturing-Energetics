import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Slider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
   

    return (
        <>

            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper  mt-2 rounded-3xl h-[390px] w-[310px] md:h-[500px] md:w-[720px] lg:h-[600px] lg:w-[1280px] mx-auto overflow-hidden"
            >


                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/Syw8SCf/image.png)` }} id="001" className='item-end element'>


                </SwiperSlide>

                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/b1z4rwt/image.png)` }} id="002" className='item-end element  '>
                    <div className='flex flex-col  mx-auto lg:flex-row-reverse justify-between w-5/6' >


                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/Zc2xqr7/image.png)` }} id="003" className='item-end element '>

                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/724Ybpd/image.png)` }} id="004" className='item-end element '>

                </SwiperSlide>

                <div className="autoplay-progress" slot="container-center">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>

                </div>



            </Swiper>


        </>
    );
}


export default Slider;