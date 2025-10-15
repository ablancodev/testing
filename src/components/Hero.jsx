import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" role="banner">
      <div className="hero__background">
        <div className="hero__gradient"></div>
      </div>
      <div className="hero__content">
        <h1 className="hero__title">
          Bienvenido a tu
          <span className="hero__title--highlight"> experiencia única</span>
        </h1>
        <p className="hero__subtitle">
          Descubre un mundo de posibilidades con diseño moderno y atractivo
        </p>
        <div className="hero__cta">
          <button className="hero__button hero__button--primary">
            Comenzar ahora
          </button>
          <button className="hero__button hero__button--secondary">
            Saber más
          </button>
        </div>
      </div>
      <div className="hero__decoration">
        <div className="hero__circle hero__circle--1"></div>
        <div className="hero__circle hero__circle--2"></div>
        <div className="hero__circle hero__circle--3"></div>
      </div>
    </section>
  );
};

export default Hero;