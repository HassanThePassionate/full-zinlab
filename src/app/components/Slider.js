"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import Image from "next/image";

const Slider = (props) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(5);

  const cards = [
    {
      title: "PDF to Word",
      img: "https://images.hipdf.com/images2022/icons/pdf-word.svg",
      des: "Easily Convert PDF to Word document.",
    },
    {
      title: "PDF to PPT",
      img: "https://images.hipdf.com/images2022/icons/PDF-PPT.svg",
      des: "Convert PDF to Powerpoint online.",
    },
    {
      title: "PDF to Excel",
      img: "https://images.hipdf.com/images2022/icons/pdf-excel.svg",
      des: "Convert PDF to Excel for Free.",
    },
    {
      title: "PDF to JPG",
      img: "https://images.hipdf.com/images2022/icons/PDF-JPG.svg",
      des: "Convert PDF files top a set of optimized JPG,PNG,BPM, G...",
    },
    {
      title: "PDF to TXT ",
      img: "https://images.hipdf.com/images2022/icons/PDF-TXT.svg",
      des: "Convert your PDF to TXT, and extract text from your PDF.",
    },
    {
      title: "PDF to RTF",
      img: "https://images.hipdf.com/images2022/icons/PDF-RTX.svg",
      des: "Convert PDF to RTF online and free.",
    },
    {
      title: "PDF to Pages",
      img: "https://images.hipdf.com/images2022/icons/PDF-Pages.svg",
      des: "Convert PDF to Pages on Mac and Windows.",
    },
    {
      title: "PDF to HTML",
      img: "https://images.hipdf.com/images2022/icons/pdf-html.svg",
      des: "Convert your PDF documents to HTML web page.",
    },
    {
      title: "PDF to DXF",
      img: "https://images.hipdf.com/images2022/icons/PDF-DXF.svg",
      des: "The best online tool to convert PDF to DXF online.",
    },
    {
      title: "PDF to EPUB ",
      img: "https://images.hipdf.com/images2022/icons/PDF-EPUB.svg",
      des: "Convert PDF file to EPUB ebook.",
    },
    {
      title: "OCR ",
      img: "https://images.hipdf.com/images2022/icons/OCR.svg",
      des: "Convert your scanned PDFs and images into editable Word, Excel, and PPT.",
    },
  ];

  const goNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 992) {
        setSlidesPerView(3);
      } else if (window.innerWidth < 1200) {
        setSlidesPerView(4);
      } else if (window.innerWidth <= 500) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(5);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="converter">
      <div className="container">
        <h1 className={`lg ${props.textmode === "tdark" ? "tlight" : "tdark"}`}>
          Convert From PDF
        </h1>
        <div
          className={`other   ${
            props.textmode === "tdark" ? "tlight" : "tdark"
          }`}
        >
          <div className="swipers-button-prev" onClick={goPrev}>
            <i className="fa-solid fa-arrow-left by"></i>
          </div>
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            loop={true}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            className="mySwiper"
          >
            <div className="cards">
              {cards.map((card, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`card  ${
                      props.mode === "dark" ? "dark" : "light"
                    } `}
                  >
                    <i class="fa-regular fa-bookmark book"></i>
                    <Image src={card.img} alt="Image" width={65} height={65} />
                    <h3>{card.title}</h3>
                    <p>{card.des}</p>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
          <div className="swipers-button-next" onClick={goNext}>
            <i className="fa-solid fa-arrow-right by-1"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
