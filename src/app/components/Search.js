import React, { useState } from "react";

const Search = () => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
    document.getElementsByClassName("suggestions")[0].style.display =
      "inline-block";
  };
  const handle = () => {
    document.getElementsByClassName("suggestion")[0].style.display = "none";
  };
  const sugg = [
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
  const showall = () => {
    document.querySelector("header").style.display = "grid";
    document.getElementsByClassName("searchings")[0].style.display = "none";
    document.getElementById("glass").style.display = "inline-block";
    document.getElementsByClassName("suggestions")[0].style.display = "none";
  };
  return (
    <>
      <div className="container">
        <form>
          <div className="search-bars">
            <div className="searchings">
              <input
                type="text"
                name="search"
                className="search"
                placeholder="Search for Movie, TV Shows, Themes & Cast"
                value={input}
                onChange={handleChange}
              />
              <p onClick={showall}>Cancel</p>
            </div>
          </div>
          <div className="suggestions">
            <div className="iconsss">
              <div className="top-text">KeyWords</div>
              <i className="fa-solid fa-x" id="crosss" onClick={handle}></i>
            </div>
            <hr />
            <div className="sugg">
              {sugg.map((elm) => {
                return (
                  <>
                    <div className="flex-box">
                      <img src={elm.img} alt="sa" width={50} height={50} />
                      <h3>{elm.title}</h3>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
