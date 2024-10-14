'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function Hero() {
  const swiperSlide = `bg-center bg-cover`;
  const swiperSlideInformation = [
    {
      title: 'Premium Comfort',
      description: 'One-click import feature lets you import the complete Depot demo content with a single mouse click.',
      image: 'https://res.cloudinary.com/dzkqopnby/image/upload/v1728169481/muebles-ecommerce/big-light_zg1ket.png',
      image2: 'https://res.cloudinary.com/dzkqopnby/image/upload/v1728169484/muebles-ecommerce/small-light_bpbjln.png'
    },
    {
      title: 'Think Different',
      description: 'Depot is a unique & captivating theme designed specifically for all types of shops and online stores.',
      image: 'https://res.cloudinary.com/dzkqopnby/image/upload/v1728169482/muebles-ecommerce/black-chair_sbdv5q.png'
    },
    {
      title: 'Contemporary Design',
      description: 'A large set of beautiful & fully flexible homepage layouts lets you create your website quickly & easily.',
      image: 'https://res.cloudinary.com/dzkqopnby/image/upload/v1728169482/muebles-ecommerce/pottery-vase_fpz5f6.jpg'
    }
  ]
  return (
    <div>
      <Swiper
        className="mySwiper md:max-h-[670px]"
        spaceBetween={30}
        effect={'fade'}
        navigation={false}
        pagination={false}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
      >
        {
          swiperSlideInformation.map((item, index) => {
            return (
                <SwiperSlide className={swiperSlide} key={index}>
                  <div className={`w-full bg-[#F3F3F3] md:max-h-[670px] min-h-[460px] px-24 md:px-[150px] flex md:flex-row flex-col-reverse justify-center md:justify-between ${index === 0 ? 'md:items-start' : 'md:items-center'}`}>
                    <div className={`text-black pb-24 flex flex-col justify-end items-start w-2/2 md:max-w-1/2 md:min-h-[670px] pt-14`}>
                      <div className='flex flex-col justify-center items-start'>
                        <h2 className='md:text-3xl text-xl uppercase font-bold'>{item.title}</h2>
                        <p className='md:text-md text-sm mt-4 text-[#999999]'>{item.description}</p>
                      </div>
                    </div>
                    <div className='flex justify-center md:max-w-2/2'>
                      <Image src={item.image} alt="" width={500} height={500} className={`${index === 1 ? 'max-w-auto md:max-w-[100%] md:max-h-[100%]' : 'max-w-[600px]'} max-h-[255px] md:max-w-[100%] md:max-h-[100%] bg-center ${index === 0 ? 'md:max-w-[340px] md:max-h-[500px] max-w-[200px] max-h-[200px]' : 'md:max-w-[350px]'}`} />
                      {item.image2 && (
                        <Image src={item?.image2} alt="" width={500} height={500} className={`bg-center md:max-w-[200px] md:max-h-[510px] md:pb-24`} />
                      )}
                    </div>
                  </div>
                </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
}