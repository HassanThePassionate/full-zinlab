"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    document.getElementById("glass").style.display = openMenu ? "flex" : "none";
    setShowSearch(!showSearch);
  };

  const showOnlySearch = () => {
    setShowSearch(true);
    document.getElementById("glass").style.display = "none";
    document.getElementsByClassName("searchings")[0].style.display = "flex";
    document.querySelector("header").style.display = "none";
  };
  const showall = () => {
    document.querySelector("header").style.display = "grid";
    document.getElementsByClassName("searchings")[0].style.display = "none";
    document.getElementById("glass").style.display = "inline-block";
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
              />
              <p onClick={showall}>Cancel</p>
            </div>
          </div>
        </form>
      </div>

      <header
        className={`header ${props.Fmode === "fdark" ? "fdark" : "flight"}`}
      >
        <div className="shadow">
          <div className="container">
            <nav className="navbar flex-2">
              <div className="logo">
                <i className="fa-solid fa-gear text-light"></i>
                <span>ZinTools</span>
              </div>

              <form>
                <div className="search-bar">
                  <div className="searching">
                    <input
                      type="text"
                      name="search"
                      className="search"
                      placeholder="Search for Movie, TV Shows, Themes & Cast"
                    />
                    <div type="submit" className="search-button">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                  </div>
                </div>
              </form>

              <div className="btns">
                <button className="btn bg-light bs">Log in</button>
                <button className="btn purple bg-primary">Sign up</button>
              </div>
              <div className="icons" id="icons">
                <i
                  className={`fa-solid fa-magnifying-glass ${
                    props.Fmode === "fdark" ? "flight" : "fdark"
                  }`}
                  id="glass"
                  onClick={showOnlySearch}
                  style={{ display: openMenu ? "none" : "inline-block" }}
                ></i>
                <i
                  className="fa-solid fa-bars"
                  id="menu"
                  onClick={toggleMenu}
                  style={{ display: openMenu ? "none" : "inline-block" }}
                ></i>
                <i
                  className="fa-solid fa-x"
                  id="cross"
                  onClick={toggleMenu}
                  style={{ display: openMenu ? "inline-block" : "none" }}
                ></i>
              </div>
            </nav>
            <div className={openMenu ? "active" : ""}>
              <section className="crumber">
                <ul className="list">
                  <li>
                    <Link href="#">Stock Video</Link>
                  </li>
                  <li>
                    <Link href="#">Video Templates</Link>
                  </li>
                  <li>
                    <Link href="#">Music</Link>
                  </li>
                  <li>
                    <Link href="#">Sound Effects</Link>
                  </li>
                  <li>
                    <Link href="#">Graphic Templates</Link>
                  </li>
                  <li>
                    <Link href="#">Graphic</Link>
                  </li>
                  <li>
                    <Link href="#">Presentation Templates</Link>
                  </li>
                  <li>
                    <Link href="#">Photo</Link>
                  </li>
                  <li>
                    <Link href="#">Fonts</Link>
                  </li>
                  <li>
                    <Link href="#">Add ons</Link>
                  </li>
                  <li>
                    <Link href="#">More</Link>
                  </li>
                  <div className="btnss">
                    <button className="btn bg-light bss">Log in</button>
                    <button className="btn purple bg-primary bn">
                      Sign up
                    </button>
                  </div>
                </ul>
                <ol className="list">
                  <li>
                    <Link href="#" className="more">
                      More
                    </Link>
                  </li>
                </ol>
              </section>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
