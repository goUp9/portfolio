"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Star from "@/public/images/star.png";

const TextSlider = () => {
  return (
    <section className="text-slider-wrapper">
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        speed={10000}
        loop={true}
        centeredSlides={false}
        modules={[Autoplay]}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="text-slider"
      >
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="light-title">
              <Link href="services">DeFi</Link>
            </h2>
            <Image src={Star} alt="DeFi" priority />
            <h2 className="light-title">
              <Link href="services" className="text-stroke" data-text="DApp">
                DApp
              </Link>
            </h2>
            <Image src={Star} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="light-title">
              <Link href="services">NFT</Link>
            </h2>
            <Image src={Star} alt="NFT" priority />
            <h2 className="light-title">
              <Link href="services" className="text-stroke" data-text="DEX">
                DEX
              </Link>
            </h2>
            <Image src={Star} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="light-title">
              <Link href="services">Ordinal</Link>
            </h2>
            <Image src={Star} alt="Ordinal" priority />
            <h2 className="light-title">
              <Link href="services" className="text-stroke" data-text="Cross-Chain">
              Cross-Chain
              </Link>
            </h2>
            <Image src={Star} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="light-title">
              <Link href="services">P2E</Link>
            </h2>
            <Image src={Star} alt="Image" priority />
            <h2 className="light-title">
              <Link href="services" className="text-stroke" data-text="Alaytics">
                Alaytics
              </Link>
            </h2>
            <Image src={Star} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="light-title">
              <Link href="services">Bridge</Link>
            </h2>
            <Image src={Star} alt="Image" priority />
            <h2 className="light-title">
              <Link href="services" className="text-stroke" data-text="Layor0">
              Layor0
              </Link>
            </h2>
            <Image src={Star} alt="Image" priority />
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="light-title">
              <Link href="services">AI</Link>
            </h2>
            <Image src={Star} alt="Image" priority />
            <h2 className="light-title">
              <Link href="services" className="text-stroke" data-text="Image">
                Image
              </Link>
            </h2>
            <Image src={Star} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="light-title">
              <Link href="services">AI</Link>
            </h2>
            <Image src={Star} alt="Image" priority />
            <h2 className="light-title">
              <Link href="services" className="text-stroke" data-text="Image">
                Image
              </Link>
            </h2>
            <Image src={Star} alt="Image" priority />
          </div>
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
};

export default TextSlider;
