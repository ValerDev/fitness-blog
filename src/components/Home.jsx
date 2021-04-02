import React from 'react';
import CustomSlider from './slider/Slider';
import '../assets/styles/home.scss';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <section id='home'>
      <CustomSlider state={{
        images: props.state.slider_images,
        title: "Slider",
        height: "750px",
        size: 'cover',
        speed: 3500,
      }} />
      <div className = "about-team-block">
        <div className = "about-img-block">
          <img src={props.state.about_img} alt = "About us"/>
        </div>
        <div className = "about-text-block">
          <h2>{props.state.about_title}</h2>
          <span>{props.state.about_text}</span>
            <Link to = "/about-us">
              <button>
                Learn more
              </button>
            </Link>
        </div>
      </div>
    </section>
  )

}
export default Home;