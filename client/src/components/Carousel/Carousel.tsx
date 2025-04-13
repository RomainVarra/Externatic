import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { partnerLogos } from "./carousel.data";

import "swiper/css";
import "swiper/css/autoplay";

const Carousel = () => {
  const swiperParams = {
    modules: [Autoplay],
    spaceBetween: 20,
    slidesPerView: 6,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      320: { slidesPerView: 2 },
      640: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 6 },
    },
  };

  const renderLogos = (logos: typeof partnerLogos, prefix: string) => {
    return logos.map((logo) => (
      <SwiperSlide key={`${prefix}-${logo.id}`}>
        <img
          width="265"
          height="122"
          src={logo.src}
          className="logo-partenaire w-full h-auto object-contain"
          alt={logo.alt}
          loading="lazy"
          srcSet={logo.srcset}
          sizes="(max-width: 265px) 100vw, 265px"
        />
      </SwiperSlide>
    ));
  };

  return (
    <section
      id="partenaires"
      aria-label="Entreprises partenaires"
      className="py-12 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <aside aria-label="Carrousel de logos d'entreprises partenaires">
          <div className="skip-link sr-only">
            <a href="#skip-slider-entreprises">
              Contourner le slider des entreprises partenaires
            </a>
          </div>

          <h2 className="sr-only">Nos partenaires</h2>

          <div className="space-y-8">
            <Swiper {...swiperParams} className="partner-carousel">
              {renderLogos(partnerLogos, "top")}
            </Swiper>

            <Swiper
              {...{
                ...swiperParams,
                autoplay: { ...swiperParams.autoplay, reverseDirection: true },
              }}
              className="partner-carousel"
            >
              {renderLogos([...partnerLogos].reverse(), "bottom")}
            </Swiper>
          </div>

          <div id="skip-slider-entreprises" />
        </aside>
      </div>
    </section>
  );
};

export default Carousel;
