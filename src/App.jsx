import React from 'react';
import Carousel from './components/Carousel';
import Destination from './components/Destination';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Luxury from './components/Luxury';
import Navbar from './components/Navbar';
import Select from './components/Select';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Destination />
      <Luxury />
      <Select />
      <Carousel />
      <Footer />
    </React.Fragment>
  );
};

export default App;
