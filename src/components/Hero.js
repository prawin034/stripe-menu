import React from 'react';
import phonesvg from '../images/phone.svg';
import { useGlobalContext } from './Context';
const Hero = () => {
  const { CloseSubMenu } = useGlobalContext();
  return (
    <div className="Hero" onMouseOver={CloseSubMenu}>
      <div className="Hero_center">
        <article className="Hero_info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="btn">START NOW</button>
        </article>
        <article className="Hero_images">
          <img src={phonesvg} alt="PHONE IMG" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
