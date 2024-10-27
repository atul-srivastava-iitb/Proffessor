'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

function Carousel() {
  return (
    <div className="mx-auto max-w-screen-md border">
      <Swiper spaceBetween={50} slidesPerView={1}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Carousel;
