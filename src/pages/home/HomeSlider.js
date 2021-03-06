import React from 'react';

const HomeSlider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/ZgbmW59/New-Project.jpg" alt='slide1' className="w-full"/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle"> ❮ </a>
                    <a href="#slide2" className="btn btn-circle"> ❯ </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/PtdB42L/New-Project-1.jpg" alt='slide1' className="w-full"/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle"> ❮ </a>
                    <a href="#slide3" className="btn btn-circle"> ❯ </a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/rpcN9ms/New-Project.jpg" alt='slide1' className="w-full"/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle"> ❮ </a>
                    <a href="#slide1" className="btn btn-circle"> ❯ </a>
                </div>
            </div>          
        </div>
    );
};

export default HomeSlider;