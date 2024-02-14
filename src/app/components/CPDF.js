import React from "react";
import Image from "next/image";

const CPDF = (props) => {
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
  return (
    <>
      <section className="converter">
        <div className="container">
          <h1
            className={`lg ${props.textmode === "tdark" ? "tlight" : "tdark"}`}
          >
            Convert From PDF
          </h1>
          <div className="cards">
            {cards.map((card, index) => (
              <div
                className={`card  ${props.mode === "dark" ? "dark" : "light"} `}
              >
                <i class="fa-regular fa-bookmark book"></i>
                <Image src={card.img} alt="Image" width={65} height={65} />
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

export default CPDF;
