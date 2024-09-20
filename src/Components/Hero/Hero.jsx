import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-container flex flex-col justify-center items-center text-center lg:ml-28 lg:mr-20 mx-auto px-10 lg:px-8 mb-4">
            <h1 className="hero-title text-white text-7xl mb-4">
                Discover an exceptional cooking <br></br> class tailored for you!
            </h1>

            <p className="hero-subtitle text-gray-300 text-xl mb-8">
            Experience the perfect blend of taste and ambiance at Chefs Table, where every dish is crafted with passion and fresh ingredients.<br></br>Join us for an unforgettable dining journey!
            </p>

            <div className="hero-buttons flex gap-6">
                <HeroButton text="Explore Now" className="btn btn-success text-white" />
                <HeroButton text="Our Feedback" className="btn btn-outline text-white" />
            </div>
        </section>
    );
};

const HeroButton = ({ text, className }) => (
    <button className={className}>
        {text}
    </button>
);

export default Hero;
