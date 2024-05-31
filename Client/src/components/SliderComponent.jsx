import React from 'react';
import Slider from 'react-slick';

const SliderComponent = ({ images }) => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear'
    };

    if (!images || !Array.isArray(images)) {
        return <div>Loading...</div>;
    }

    return (
        <div className='slider-container bg-black border-b-2 border-yellow-400'>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className='p-3'>
                        <div className='flex justify-center'>
                            <img className='w-1/2 object-cover-2 rounded-md border-2 border-yellow-400' src={image} alt={`Slide ${index}`} />
                        </div>
                        <div className='flex justify-center items-center mt-2 '>
                            <button className='text-black p-1 px-2 rounded-md text-lg font-semibold bg-yellow-400'>Watch Now</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderComponent;

