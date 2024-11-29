import React, { useEffect, useRef, useState } from "react";
import img1 from "../../shared/assets/images/1img.webp";
import img2 from "../../shared/assets/images/2img.webp";
import img3 from "../../shared/assets/images/3img.webp";
import img4 from "../../shared/assets/images/4img.webp";
import img5 from "../../shared/assets/images/5img.webp";
import img6 from "../../shared/assets/images/6img.webp";
import img7 from "../../shared/assets/images/7img.webp";
import img8 from "../../shared/assets/images/8img.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

import SwiperCard from "../../shared/ui/swiper-card";
import styles from "./index.module.scss";
import { Scrollbar } from "swiper/modules";
import FooterIcon from "../../shared/assets/icons/footer-icon";
import FolderIcon from "../../shared/assets/icons/folder-icon";

const SwiperCardContainer: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<SVGSVGElement>(null);

  const cards = [
    { imageSrc: img1, text: "Приложение учёта физической активности Meditate" },
    { imageSrc: img2, text: "Приложение учёта физической активности Meditate" },
    { imageSrc: img3, text: "Приложение учёта физической активности Meditate" },
    { imageSrc: img4, text: "Приложение учёта физической активности Meditate" },
    { imageSrc: img5, text: "Приложение учёта физической активности Meditate" },
    { imageSrc: img6, text: "Приложение учёта физической активности Meditate" },
    { imageSrc: img7, text: "Приложение учёта физической активности Meditate" },
    { imageSrc: img8, text: "Приложение учёта физической активности Meditate" },
  ];

  // Функция для обновления позиции кастомного скроллбара
  const updateScrollbar = () => {
    const swiperInstance = swiperRef.current?.swiper;
    const scrollbar = scrollbarRef.current;

    if (!swiperInstance || !scrollbar) return;

    const totalSlides = swiperInstance.slides.length;
    const activeIndex = swiperInstance.activeIndex;

    const progress = activeIndex / (totalSlides - 1);

    if (window.innerWidth < 700) {
      scrollbar.style.transform = `translateX(${progress * 1270}%)`;
    } else {
      scrollbar.style.transform = `translateX(${progress * 5400}%)`;
    }
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;

    if (swiperInstance) {
      swiperInstance.on("slideChange", updateScrollbar);

      updateScrollbar();

      return () => {
        swiperInstance.off("slideChange", updateScrollbar);
      };
    }
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!swiperRef.current || !containerRef.current) return;

      const swiperInstance = swiperRef.current.swiper;
      const swiperContainer = containerRef.current;

      const rect = swiperContainer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const centerOfScreen = viewportHeight / 2;

      if (rect.top < centerOfScreen && rect.bottom > centerOfScreen) {
        e.preventDefault();

        const scrollAmount = e.deltaY;

        if (scrollAmount > 0) {
          if (swiperInstance.isEnd) {
            window.scrollBy(0, 50);
          } else {
            swiperInstance.slideNext();
          }
        } else if (scrollAmount < 0) {
          if (swiperInstance.isBeginning) {
            window.scrollBy(0, -50);
          } else {
            swiperInstance.slidePrev();
          }
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <FolderIcon />
        <div className={styles.customScrollbar}>
          <FooterIcon stroke="#0000FF" ref={scrollbarRef} />
        </div>
      </div>
      <div className={styles.cardsContainer} ref={containerRef}>
        <Swiper
          ref={swiperRef}
          spaceBetween={20}
          loop={true}
          modules={[Scrollbar]}
          scrollbar={{
            hide: true,
            draggable: true,
          }}
          breakpoints={{
            700: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide className={styles.cardsContainer_swiper} key={index}>
              <div className={styles.cardsContainer_swiper_card}>
                <SwiperCard imageSrc={card.imageSrc} text={card.text} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperCardContainer;
