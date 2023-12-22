import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


//* refactor to take in an array of image sources
//! be careful - think of what is calling the source
//! consider moving ImageSwiper component on same level as Merch
export default function ImageSwiper({ images }) {
    return (
        <Swiper className='swiper-boi'
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log( swiper )}
            pagination={true}
            // slideToClickedSlide={true}
            controller={true}
        >
            { images.map( image => (
                <SwiperSlide className='swiper-slide'>
                    <img className='store-item-image' src={ image } alt='cool shirt brah' />
                </SwiperSlide>
            ))}
            {/* <SwiperSlide className='swiper-slide'>Slide 1</SwiperSlide>
            <SwiperSlide className='swiper-slide'>Slide 2</SwiperSlide>
            <SwiperSlide className='swiper-slide'>Slide 3</SwiperSlide>
            <SwiperSlide className='swiper-slide'>Slide 4</SwiperSlide> */}
        </Swiper>
    )
}