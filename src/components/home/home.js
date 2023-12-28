import React from "react";
import "./home.css";
import useLocalStorage from "use-local-storage";
import profile from "../../images/WhatsApp Image 2023-11-22 at 20.19.02_e8fd1184.jpg";
import Lottie from "lottie-react";
import hero_animation from "../../images/Animation - 1703512399903.json";
import css from "../../images/css certificate_page-0001.png";
import jsb from "../../images/javascript_basic certificate_page-0001.png";
import jsi from "../../images/javascript_intermediate certificate_page-0001.png";
import { CCarousel } from '@coreui/react';
import { CImage } from '@coreui/react';
import { CCarouselItem } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

function Home() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <>
      <div className="wholePage" data-theme={theme}>
        {/* This is for the top bar with the circle image. */}
        <div className="topfullbar" id='topfullbar'>
          <div className="topbar">
            <h1>G.Chaitanya</h1>
          </div>
          <div className="topbarcircle">
            <div className="topinnercircle">
              <div className="innerinnercircle">
                <img src={profile} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* this is fro the side navigtion bar */}
          {/* dark and light theam switch */}
          <div className="dlswitch">
            <ion-icon name="contrast-outline" onClick={switchTheme}></ion-icon>
          </div>

          {/* side Navigation bar */}
          <div className="nav">
            <div>
              <div className="more">
                <ion-icon name="filter-outline"></ion-icon>
              </div>
              <div className="nav_items">
                <ul>
                  <li className="list" activeClassName="active">
                    <a href="#topfullbar">
                      <div className="icon">
                        <ion-icon name="home-outline"></ion-icon>
                      </div>
                    </a>
                    <span className="title">home</span>
                  </li>
                  <li className="list" activeClassName="active">
                    <a href="#skill">
                      <div className="icon">
                        <ion-icon name="compass-outline"></ion-icon>
                      </div>
                    </a>
                    <span className="title">Skills</span>
                  </li>
                  <li className="list">
                    <a href="#car">
                      <div className="icon">
                        <ion-icon name="receipt-outline"></ion-icon>
                      </div>
                    </a>
                    <span className="title">Certificate</span>
                  </li>
                  <li className="list">
                    <a href="#foot">
                      <div className="icon">
                        <ion-icon name="person-outline"></ion-icon>
                      </div>
                    </a>
                    <span className="title">Contacts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="hero" id="hero">
          <div className="info">
            <div className="greeting">
              <h1>Welcome to my </h1>
              <h1 className="accent">Portfolio</h1>
            </div>
            <p>
              Greetings! I am a dedicated individual with a fervor for exploring
              diverse facets of technology. Currently pursuing a BTech degree at
              Naraaraopeta Engineering College, my interests span AI/ML, Web
              Development, and Data Science. Engaging in hands-on experiences
              through the CodeZen Club and various software projects, I
              continuously seek opportunities for growth. Proficient in
              languages like Python and skilled in Full Stack Web Development, I
              am excited about the endless possibilities within the tech
              landscape. Let's connect, share insights, and explore the exciting
              intersections of technology together!
            </p>
          </div>
          <div className="animation">
            <Lottie animationData={hero_animation}></Lottie>
          </div>
        </div>

        <div className="skil" id="skill">
          <h1>My Skills</h1>

          <div className="cards">
            <div className="card">
              <ion-icon name="logo-react"></ion-icon>
              <h4>React</h4>
              {/* <div>Learn More</div> */}
            </div>
            <div className="card">
              <ion-icon name="logo-html5"></ion-icon>
              <h4>HTML</h4>
              {/* <div>Learn More</div> */}
            </div>
            <div className="card">
              <ion-icon name="logo-css3"></ion-icon>
              <h4>CSS</h4>
              {/* <div>Learn More</div> */}
            </div>
            <div className="card">
              <ion-icon name="logo-javascript"></ion-icon>
              <h4>JavaScript</h4>
              {/* <div>Learn More</div> */}
            </div>
          </div>
        </div>

        <div className="car" id="car">
          <CCarousel controls indicators dark>
            <CCarouselItem>
              <CImage className="d-block w-100" src={css} alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={jsb} alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                className="d-block w-100"
                src={jsi}
                alt="slide 3"
              />
            </CCarouselItem>
          </CCarousel>
        </div>

        <footer id="foot">
          <p>Lets contact</p>
          <div class="icons">
            <a href="https://github.com/Chaitanya3000">
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a href="https://linkedin.com/in/chaitanya3000">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
