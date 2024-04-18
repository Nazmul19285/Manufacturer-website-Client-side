import React from 'react';

const HomeSlider = () => {
    return (
        <div className="carousel max-h-[700px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/VktyqZqJ/7qtw-gm0s-210907.jpg" alt='slide1' className="w-full"/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle"> ❮ </a>
                    <a href="#slide2" className="btn btn-circle"> ❯ </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/g0MzBRbZ/red-sports-bike.jpg" alt='slide1' className="w-full"/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle"> ❮ </a>
                    <a href="#slide3" className="btn btn-circle"> ❯ </a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/SxdYknpy/white-bicycle-standing-park-morning-fitness-loneliness.jpg" alt='slide1' className="w-full"/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle"> ❮ </a>
                    <a href="#slide1" className="btn btn-circle"> ❯ </a>
                </div>
            </div>          
        </div>
    );
};

export default HomeSlider;
