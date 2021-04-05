import React from 'react';
import Slider from 'infinite-react-carousel';
import '../../assets/styles/slider/journeySlider.scss'

class JourneySlider extends React.Component {
    render() {
        const settings = {
            adaptiveHeight: true,
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: this.props.state.speed ? this.props.state.speed : 3000,
            slidesToShow: 4,
        };
        return (
            <div>
                <Slider {...settings} className='journey-slider'>
                    {
                        this.props.state.images ? this.props.state.images.map((image, index) => {
                            return < div key={index} >
                                <div key={index} className={`journey-slider-image img_${++index}`}
                                    style={{
                                        backgroundImage: `url(${image})`,
                                        height: this.props.state.height ? this.props.state.height : '500px',
                                        width:this.props.state.width ? this.props.state.width : "400px",
                                        backgroundSize: this.props.state.size ? this.props.state.size : 'contain'
                                    }}></div>
                            </div>
                        }) : <div className='danger'>⚠ You don't give images to CustomSlider component!</div>
                    }
                </Slider>
            </div >
        );
    }
}

export default JourneySlider;