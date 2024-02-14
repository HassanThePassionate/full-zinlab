"use client";
import { useState } from "react";
import CPDF from "./components/CPDF";
import Converter from "./components/Converter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

const Page = () => {
  const [mode, setMode] = useState("light");
  const [textmode, setTextMode] = useState("tdark");
  const [Fmode, setFMode] = useState("flight");
  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      setTextMode("tlight");
      setFMode("fdark");
      document.body.style.backgroundColor = "#000";
    } else {
      setMode("light");
      setTextMode("tdark");
      setFMode("flight");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar Fmode={Fmode} textmode={textmode} />
      <Slider mode={mode} textmode={textmode} />
      <Converter mode={mode} textmode={textmode} />
      <CPDF mode={mode} />
      <Footer mode={mode} toggle={toggle} Fmode={Fmode} />
    </>
  );
};

export default Page;
