import React from 'react';
import CustomSlider from './slider/Slider';
import '../assets/styles/home.scss';
import { Link } from 'react-router-dom';

const Home = (props) => {

  const slider_images = ['/images/homeSliderImages/slide_1.jpg', '/images/homeSliderImages/slide_2.jpg', '/images/homeSliderImages/slide_3.jpg'];

  const journey_slider_images = ['/images/home/bef-aft-1.jpg', '/images/home/bef-aft-2.jpg', '/images/home/bef-aft-3.jpg', '/images/home/bef-aft-4.jpg', '/images/home/bef-aft-5.jpg']
  
  return (
    <section id='home'>
      <CustomSlider state={{
        images: slider_images,
        title: "Slider",
        height: "1020px",
        size: 'contain',
        speed: 3500,
      }} />
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
      <div className = "layout">
        <h2>Interesting facts</h2>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam suscipit corporis, molestias sapiente quidem velit doloremque atque minus hic mollitia itaque quibusdam quos quaerat, veniam labore iste voluptatum quasi facilis?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum saepe ad aut nobis iusto laboriosam voluptate quod optio consequuntur amet officiis id ipsum hic, tenetur ab quae ullam, quam ea.
        </span>
      </div>
      <div className="layout journey-block">
        <h2>Our journey</h2>
      </div>
      <CustomSlider
        state={{
          images: journey_slider_images,
          title: 'Journey Slider',
          toShow: 3,
          height: "500px",
          width: "400px",
          size: "contain",
          speed: 3500
        }}
      />
    </section>
  )

}
export default Home;