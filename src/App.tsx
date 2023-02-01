import React from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Header />
      <Home />
      <Cart />
      <Footer />
    </main>
  );
}

export default App;
