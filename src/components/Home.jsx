import React from 'react';
import CustomSlider from './slider/Slider';
import '../assets/styles/home.scss';
import { Link } from 'react-router-dom';

const Home = (props) => {

  const slider_images = ['/images/homeSliderImages/slide_1.jpg', '/images/homeSliderImages/slide_2.jpg', '/images/homeSliderImages/slide_3.jpg'];

  const journey_slider_images = ['/images/home/bef-aft-1.jpg', '/images/home/bef-aft-2.jpg', '/images/home/bef-aft-3.jpg', '/images/home/bef-aft-4.jpg', '/images/home/bef-aft-5.jpg']
  
  var randomFact = props.interesting_facts[Math.floor(Math.random()*props.interesting_facts.length)];
 
  return (
    <section id='home'>
      <CustomSlider state={{
        images: slider_images,
        title: "Slider",
        height: "1020px",
        size: 'contain',
        speed: 3500,
        text:'lorem ipsum'
      }}
      />
      <div className="layout about-team-block">
        <div className="about-img-block">
          <div className="about-img" style={{ backgroundImage: ` url(/images/home_about_img.jpg)` }}>
          </div>
        </div>
        <div className="about-text-block">
          <h2>About us</h2>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum officia sed reiciendis, repellat esse explicabo nisi magni? Voluptatibus illo magni atque, rerum vel enim excepturi? Enim nobis illo saepe reprehenderit.</span>
          <Link to="/about-us">
            <button>
              Learn more
                </button>
          </Link>
        </div>
      </div>
      <div className = "layout interesting-fact-block">
        <h1>Interesting Fact</h1>
        <div className="random-fact-content">
          <h3>{randomFact.title}</h3>
          <span>
            {randomFact.text}
          </span>
        </div>
      </div>
      <div className="journey-block">
        <div className="layout">
          <h2>Our journey</h2>
        </div>
          {/* <CustomSlider
            state={{
              images: journey_slider_images,
              title: 'Journey Slider',
              toShow: 3,
              height: "500px",
              width: "400px",
              size: "contain",
              speed: 3500
            }}
          /> */}
      </div>
      <div className="posts-section">
        <div className="layout">
          <div className="news-image-block">

          </div>
          <div className="news-text-block">

          </div>
        </div>
      </div>
    </section>
  )

}
export default Home;