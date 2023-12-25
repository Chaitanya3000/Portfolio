import React from "react";
import "./home.css";
import profile from "../../images/WhatsApp Image 2023-11-22 at 20.19.02_e8fd1184.jpg";

function Home() {
  return (
    <>
      {/* This is for the top bar with the circle image. */}
      <div className="topfullbar">
        <div className="topbar">
          <h1>G.Chaitanya Nanda Mohan</h1>
        </div>
        <div className="topbarcircle">
          <div className="topinnercircle">
            <div className="innerinnercircle">
              <img src={profile} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* this is fro the side navigtion bar */}
      {/* dark and light theam switch */}
      <div className="dlswitch">
        <ion-icon name="contrast-outline"></ion-icon>
      </div>

      {/* side Navigation bar */}
      <div className="nav">
        <div className="more">
          <ion-icon name="filter-outline"></ion-icon>
        </div>
        <div className="nav_items">
          <ul>
            <li className="list" activeClassName="active">
              <a href="/">
                <div className="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </div>
              </a>
              <span className="title">home</span>
            </li>
            <li className="list" activeClassName="active">
              <a href="#">
                <div className="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </div>
              </a>
              <span className="title">home</span>
            </li>
            <li className="list">
              <a href="#">
                <div className="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </div>
              </a>
              <span className="title">home</span>
            </li>
            <li className="list">
              <a href="#">
                <div className="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </div>
              </a>
              <span className="title">home</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
