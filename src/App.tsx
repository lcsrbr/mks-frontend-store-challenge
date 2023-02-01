import React from 'react';
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  const cartRedux = useSelector(
    ({ cart }: RootState) => cart.cart
  );
  return (
      <>
        <Header />
        <Home />
        <Cart />
        {/* {cartRedux && <Cart />} */}
        <Footer />
      </>
  );
}

export default App;
