import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { CustomPrevArrow, CustomNextArrow } from './CustomArrows';

const Genre = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/imdb/random-movies")
            .then(response => response.json())
            .then(data => {
                const imageObjects = data.map(url => ({ url }));
                setImages(imageObjects);
            })
            .catch(error => {
                console.error('Error fetching images:', error);
            });

    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };

    return (
        <div className="slider-container bg-black text-yellow-100 text-md">
            <div className='p-2 pb-0 pl-3 w-full'>Top Movies</div>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <div className='flex justify-around pb-4'>
                            <img src={image.url} alt={`Movie Poster ${index}`} className="w-3/4 h-3/4 mt-2 border-2 border-yellow-400 rounded-md" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Genre;

// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import { CustomPrevArrow, CustomNextArrow } from './CustomArrows';

// import poster1 from '../assets/posters/1.jpg';
// import poster2 from '../assets/posters/2.jpg';
// import poster3 from '../assets/posters/3.jpg';
// import poster4 from '../assets/posters/4.jpg';

// const Genre = () => {
//     const [images, setImages] = useState([]);

//     useEffect(() => {
//         const fetchImages = () => {
//             // Fetch images from your API
//             fetch('https://api.example.com/images')
//                 .then(response => response.json())
//                 .then(data => {
//                     // Assuming your API returns an array of image URLs
//                     setImages(data);
//                 })
//                 .catch(error => {
//                     console.error('Error fetching images from API:', error);
//                     // Fallback to local storage images
//                     setImages([
//                         { url: poster1 },
//                         { url: poster2 },
//                         { url: poster3 },
//                         { url: poster4 }
//                         // Add more local images here if needed
//                     ]);
//                 });
//         };
//         fetchImages();
//     }, []);

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 2,
//         slidesToScroll: 3,
//         prevArrow: <CustomPrevArrow />,
//         nextArrow: <CustomNextArrow />
//     };

//     return (
//         <div className="slider-container bg-black text-yellow-100 text-md">
//             <div className=' p-2 pb-0 pl-3 w-full'>Top Movies</div>

//             <Slider {...settings}>
//                 {images.map((image, index) => (
//                     <div key={index} >
//                         <div className='flex justify-around pb-4 '>
//                             <img src={image.url} alt={`Image ${index}`} className="w-3/4 h-3/4 mt-2 border-2 border-yellow-400 rounded-md" />
//                         </div>
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// }

// export default Genre;



