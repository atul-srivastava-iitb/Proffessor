'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { latestupdates } from '@/data/home/latest_updates';
import { useEffect, useState } from 'react';
const imageLocation = '/latest_updates/';

function LatestUpdates() {
  const [width, setWidth] = useState<number>(500);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  const numberofslides =
    width > 1200 ? 4 : width > 800 ? 3 : width > 500 ? 2 : 1;

  return (
    <div>
      <div className="grid grid-cols-1 grid-rows-1 items-stretch justify-stretch">
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={numberofslides}
            className="w-full rounded-md"
          >
            {latestupdates.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="min-h-400 max-h-600 tab1:h-[400] tab2:h-[500] tab5:h-[600]">
                    <img
                      src={`${imageLocation}${item.image.trim()}`}
                      alt=""
                      className="h-full w-full max-w-full rounded-md object-fill"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-slate-50/75 py-2">
                      <div>{item.name}</div>
                      <div>{item.text}</div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default LatestUpdates;
