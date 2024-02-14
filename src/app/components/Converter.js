"use client";
import Image from "next/image";
const Converter = (props) => {
  const cards = [
    {
      title: "Word to PDF",
      img: "https://images.hipdf.com/images2022/icons/word-pdf.svg",
      des: "The best Word to PDF converter online.",
    },
    {
      title: "PPT to PDF",
      img: "https://images.hipdf.com/images2022/icons/PPT-PDF.svg",
      des: "Convert Powerpoint to PDF online.",
    },
    {
      title: "Excel to PDF",
      img: "https://images.hipdf.com/images2022/icons/Excel-PDF.svg",
      des: "Easily Convert Excel spreadsheet to PDF",
    },
    {
      title: "JPG to PDF",
      img: "https://images.hipdf.com/images2022/icons/jpg-pdf.svg",
      des: "Convert JPG,PNG,BPM, GIF,and TIFF images to PDF",
    },
    {
      title: "TXT to PDF ",
      img: "https://images.hipdf.com/images2022/icons/Image-in-TXT.svg",
      des: "Convert TXT to PDF online for free.",
    },
    {
      title: "RTF to PDF ",
      img: "https://images.hipdf.com/images2022/icons/Image-in-RTX.svg",
      des: "Convert RTF file to PDF online for free.",
    },
    {
      title: "PUB to PDF ",
      img: "https://images.hipdf.com/images2022/icons/Excel-PUB.svg",
      des: "Convert Publisher to PDF document.",
    },
  ];

  return (
    <>
      <section className="converter">
        <div className="container">
          <h1
            className={`lg ${props.textmode === "tdark" ? "tlight" : "tdark"}`}
          >
            Convert to PDF
          </h1>

          <div className="cards">
            {cards.map((card, index) => (
              <div
                className={`card  ${props.mode === "dark" ? "dark" : "light"} `}
                key={index}
              >
                <i class="fa-regular fa-bookmark book"></i>
                <Image
                  src={card.img}
                  alt="img"
                  width={"65"}
                  height={"65"}
                ></Image>
                <h3>{card.title}</h3>
                <p>{card.des}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Converter;
