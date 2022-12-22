import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Layout/Footer/Footer";
import Navigation from "./components/Layout/Navigation/Navigation";
import Items from "./components/Products/Items/Items";
import CartProvider from "./store/CartProvider";


function App() {
  const [usingCart, setUsingCart] = useState(false);

  const showCart = () => {
    setUsingCart(true);
  }
  const hideCart = () => {
    setUsingCart(false);
  }

  return (
    <CartProvider>
      <Navigation onCartClick={showCart} />
      {usingCart && <Cart onCloseClick={hideCart} />}
      <Items />
      <Footer />
    </CartProvider>
  );
}

export default App;
