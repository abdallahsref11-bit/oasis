/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Booking from './components/Booking';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    <div className="min-h-screen">
      <Preloader />
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <About />
        <Reviews />
        <Booking />
        <Contact />
      </main>

      <FloatingCTA />
    </div>
  );
}

