import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import '../Slider/Slider.css';
import { EffectCards, Pagination } from 'swiper/modules';

export default function Slider({children}) {
  return (
    <>
      <Swiper id='swiperCard'
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Pagination]}
        className="mySwiper"
        pagination={true}
      >
        {children.map((card, index) => (
        <SwiperSlide key={index}>
          <div>{card}</div>
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}