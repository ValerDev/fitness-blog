import React from 'react';
import CustomSlider from './slider/Slider';

const Home = (props) => {
  return (
    <section id='home'>
      <CustomSlider state={{
        images: props.state.slider_images,
        title: "Slider",
        height: "500px",
        size: 'cover',
        speed: 2000,
      }} />
      <h1>Fitness Blog</h1>
      <h5>Day 1</h5>
    </section>
  )

}
export default Home;