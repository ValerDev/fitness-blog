import React from 'react';
import Slider from 'infinite-react-carousel';
import '../../assets/styles/slider/slider.scss'
class CustomSlider extends React.Component {
    render() {
        const settings = {
            adaptiveHeight: true,
            arrows: false,
            dots: true,
            centerMode: true,
            autoplay: true,
            autoplaySpeed: this.props.state.speed ? this.props.state.height : 3000,
        };
        return (
            <div>
                {this.props.state.title ? <h3>CustomSlider</h3> : ''}
                <Slider {...settings} className='custom-slider'>
                    {
                        this.props.state.images ? this.props.state.images.map((image, index) => {
                            return < div key={index} >
                                <div key={index} className={`slider-image img_${++index}`}
                                    style={{
                                        backgroundImage: `url(${image})`,
                                        height: this.props.state.height ? this.props.state.height : '400px',
                                        backgroundSize: this.props.state.size ? this.props.state.size : 'cover'
                                    }}></div>
                            </div>
                        }) : <div className='danger'>⚠ You don't give images to CustomSlider component!</div>
                    }
                </Slider>
            </div >
        );
    }
}

export default CustomSlider;