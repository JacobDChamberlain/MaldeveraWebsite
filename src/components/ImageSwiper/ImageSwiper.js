import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


//! be careful - think of what is calling the source
//! consider moving ImageSwiper component on same level as Merch
//~ this may not actually matter
export default function ImageSwiper({ images }) {
    return (
        <Swiper className='swiper-boi'
            spaceBetween={100}
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
        </Swiper>
    )
}