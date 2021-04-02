import React from 'react';
import CustomSlider from './slider/Slider';

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
          <img src="" alt=""/>
        </div>
        <div className = "about-text-block">
          <h2>{props.state.home.about_title}</h2>
          <span></span>
          <button>Learn more</button>
        </div>
      </div>
    </section>
  )

}
export default Home;