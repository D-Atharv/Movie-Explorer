import React from 'react';

const CustomPrevArrow = ({ className, style, onClick }) => (
    <div
        className={`${className} custom-prev-arrow`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
    />
);

const CustomNextArrow = ({ className, style, onClick }) => (
    <div
        className={`${className} custom-next-arrow`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
    />
);

export { CustomPrevArrow, CustomNextArrow };
