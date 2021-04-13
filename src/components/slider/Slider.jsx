import React from 'react';
import Slider from 'infinite-react-carousel';
import '../../assets/styles/slider/slider.scss'
class CustomSlider extends React.Component {
    render() {
        const settings = {
            adaptiveHeight: true,
            arrows: false,
            dots: true,
            autoplay: true,
            slidesToShow: this.props.state.toShow ? this.props.state.toShow : 1,
            autoplaySpeed: this.props.state.speed ? this.props.state.speed : 3000,
        };
        return (
            <div>
                <Slider {...settings} className='custom-slider'>
                    {
                        this.props.state.images ? this.props.state.images.map((image, index) => {
                            return < div key={index} >
                                <div key={--index} className={`slider-image img_${++index}`}
                                    style={{
                                        backgroundImage: `url(${image})`,
                                        height: this.props.state.height ? this.props.state.height : '400px',
                                        backgroundSize: this.props.state.size ? this.props.state.size : 'cover'
                                    }}>
                                       {this.props.state.container === true ? <div className="container">
                                            <span>
                                            <h2>Title</h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ullam, corrupti nam explicabo tempora, corporis ab rerum qui aperiam commodi at dicta officiis accusantium vero harum doloribus quas! Assumenda, quaerat.</span>
                                            <button>Read More...</button>
                                        </div> : ''}
                                    </div>
                            </div>
                        }) : <div className='danger'>⚠ You didn't give images to CustomSlider component!</div>
                    }
                </Slider>
            </div >
        );
    }
}

export default CustomSlider;