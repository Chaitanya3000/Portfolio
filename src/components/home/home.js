import React, { useState } from "react";
import "./home.css";
import useLocalStorage from "use-local-storage";
import profile from "../../images/WhatsApp Image 2023-11-22 at 20.19.02_e8fd1184.jpg";
import Lottie from "lottie-react";
import hero_animation from "../../images/Animation - 1703512399903.json";
import "react-responsive-carousel/lib/styles/carousel.css";  // Fix the import for the carousel CSS
import { Carousel } from "react-responsive-carousel";

function Home() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const [currentIndex, setCurrentIndex] = useState(0);  // Define 'currentIndex' using 'useState'
  
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  const imageData = [
    {
      label: "Image 1",
      alt: "image1",
      url: "https://lh5.googleusercontent.com/xo6zDzj4Mq8JTuh31DRdzWPkmeekU1ykdvy7gmdGNkBnVzHoULgCA_MpL1ybOV2GKEkbvmswUl0iQW0lvnNQe3gqOFi_-bbt3MBzOAla29FvVN753jPZS87Bn7HyXoQ-dwA-ioYg",
    },
    {
      label: "Image 2",
      alt: "image2",
      url: "https://cdn.thomasnet.com/insights-images/eaf2ea91-c0ca-488d-ab63-af480b6f78cb/750px.png",
    },
    {
      label: "Image 3",
      alt: "image3",
      url: "https://moneyinc.com/wp-content/uploads/2018/11/Willow-750x500.jpg",
    },
    {
      label: "Image 4",
      alt: "image4",
      url: "https://japan.stripes.com/sites/default/files/styles/community_site_carousel_750x500/public/article-images/main_13.jpg?itok=_GELFbpY",
    },
  ];

  const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
      <img src={image.url} alt={image.alt} />
      <p className="legend">{image.label}</p>
    </div>
  ));
  return (
    <>
      <div className="wholePage" data-theme={theme}>
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
          </div>
        </div>

        <div className="hero">
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

        <div className="cards">
          <div className="card">
            <ion-icon name="logo-react"></ion-icon>
            <h4>React</h4>
            <div>Learn More</div>
          </div>
          <div className="card">
            <ion-icon name="logo-react"></ion-icon>
            <h4>React</h4>
            <div>Learn More</div>
          </div>
          <div className="card">
            <ion-icon name="logo-react"></ion-icon>
            <h4>React</h4>
            <div>Learn More</div>
          </div>
          <div className="card">
            <ion-icon name="logo-react"></ion-icon>
            <h4>React</h4>
            <div>Learn More</div>
          </div>
          <div className="card">
            <ion-icon name="logo-react"></ion-icon>
            <h4>React</h4>
            <div>Learn More</div>
          </div>
          <div className="card">
            <ion-icon name="logo-react"></ion-icon>
            <h4>React</h4>
            <div>Learn More</div>
          </div>
        </div>

        <div className="App">
          <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            selectedItem={imageData[currentIndex]}
            onChange={handleChange}
            className="carousel-container"
          >
            {renderSlides}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Home;
