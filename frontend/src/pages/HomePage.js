import React from 'react';
import ProductList from '../components/ProductList'; // Assuming ProductList displays the products

const HomePage = () => {
  return (
    <div className="HomePage">
      <header className="App-header">
        <h1>Welcome to K-Pop Merchandise</h1>
        <p>Explore the latest merchandise for your favorite K-Pop groups!</p>
      </header>
      <main>
        <ProductList onAddToCart={(product) => console.log('Product added to cart:', product)} />
      </main>
    </div>
  );
};

export default HomePage;
