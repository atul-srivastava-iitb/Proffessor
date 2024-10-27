import { Swiper, SwiperSlide } from 'swiper/react';
import { GALLERY } from '../interface/gallery.interface';

type props = {
  images: GALLERY;
  location: string;
  children?: React.ReactNode;
};

function GalleryCarousel({ children, images, location }: props) {
  return (
    <div className="grid grid-cols-1 grid-rows-1 items-stretch justify-stretch">
      {children}
      <div className="rounded-md border p-3">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          className="w-full rounded-md"
        >
          {images.map((imgName, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="mobile2:h-[300] tab2:h-[500px] tab4:h-[700px]">
                  <img
                    src={`${location}${imgName.trim()}`}
                    alt=""
                    className="h-full max-h-full w-full max-w-full rounded-md object-fill"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default GalleryCarousel;
