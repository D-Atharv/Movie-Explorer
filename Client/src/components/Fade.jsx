import React, { useState, useEffect } from 'react';
import SliderComponent from './SliderComponent';
import poster1 from '../assets/posters/1.jpg';
import poster2 from '../assets/posters/2.jpg';
import poster3 from '../assets/posters/3.jpg';
import poster4 from '../assets/posters/4.jpg';
const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;
const apiHost = import.meta.env.VITE_RAPIDAPI_HOST;




const Fade = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("https://imdb8.p.rapidapi.com/auto-complete?q=movie", {
            headers: {
                "X-RapidAPI-Key": apiKey,
                "X-RapidAPI-Host": apiHost
            }
        })
            .then(response => response.json())
            .then(data => {
                // Assuming the API returns an array of items with image URLs in 'i' object
                const imageUrls = data.d.map(item => item.i.imageUrl);
                setImages(imageUrls);
            })
            .catch(error => {
                console.error('Error fetching images from API:', error);
                // Fallback to local images in case of error
                setImages([poster1, poster2, poster3, poster4]);
            });
    }, []);

    return <SliderComponent images={images} />;
};

export default Fade;



// import React, { useState, useEffect } from 'react';
// import SliderComponent from './SliderComponent';
// import poster1 from '../assets/posters/1.jpg';
// import poster2 from '../assets/posters/2.jpg';
// import poster3 from '../assets/posters/3.jpg';
// import poster4 from '../assets/posters/4.jpg';

// const Fade = () => {
//     const [images, setImages] = useState([]);

//     useEffect(() => {
//         fetch('https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY')
//             .then(response => response.json())
//             .then(data => {
//                 // Assuming the API returns an array of image URLs
//                 const imageUrls = data.map(image => image.urls.small);
//                 setImages(imageUrls);
//             })
//             .catch(error => {
//                 console.error('Error fetching images from API:', error);
//                 // Fallback to local images in case of error
//                 setImages([poster1, poster2, poster3, poster4]);
//             });
//     }, []);

//     return <SliderComponent images={images} />;
// };

// export default Fade;

// import React, { useState, useEffect } from 'react';
// import SliderComponent from './SliderComponent';
// import poster1 from '../assets/posters/1.jpg';
// import poster2 from '../assets/posters/2.jpg';
// import poster3 from '../assets/posters/3.jpg';
// import poster4 from '../assets/posters/4.jpg';

// const Fade = () => {
//     const [images, setImages] = useState([]);

//     useEffect(() => {
//         fetch("https://imdb8.p.rapidapi.com/auto-complete?q=movie", {
//             headers: {
//                 "X-RapidAPI-Key": "5d52306104msh5206aa19d10cc42p1da02bjsn387f66099339",
//                 "X-RapidAPI-Host": "imdb8.p.rapidapi.com"
//             }
//         })
//             .then(response => response.json())
//             .then(data => {
//                 // Assuming the API returns an array of items with image URLs in 'i' object
//                 const imageUrls = data.d.map(item => item.i.imageUrl);
//                 setImages(imageUrls);
//             })
//             .catch(error => {
//                 console.error('Error fetching images from API:', error);
//                 // Fallback to local images in case of error
//                 setImages([poster1, poster2, poster3, poster4]);
//             });
//     }, []);

//     return <SliderComponent images={images} />;
// };

// export default Fade;
