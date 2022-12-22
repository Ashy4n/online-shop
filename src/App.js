import Cart from "./components/Cart/Cart";
import Footer from "./components/Layout/Footer/Footer";
import Navigation from "./components/Layout/Navigation/Navigation";
import Items from "./components/Products/Items/Items";


function App() {
  return (
    <>
      <Navigation />

      <Cart />
      <Items />
      <Footer />
    </>

  );
}

export default App;
