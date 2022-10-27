import React from 'react';
import { HeroBanner, Product, FooterBanner } from '../components';

const Home = () => (
  <div>
    <HeroBanner />

    <div className='products-heading'>
      <h2>
        Best Seller Products
      </h2>
      <p>
        Printers, Safe Boxes and Toners of many variations
      </p>

    </div>

    <div className='products-container'>
      {[ 'Product 1', 'Product 2'].map(
        (product) => product
      )}

    </div>

    <FooterBanner />
    
  </div>
)

export default Home;