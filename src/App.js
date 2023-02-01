import Header from "./components/Layout/Header";
import {useState} from "react";
import './index.css'
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import Container from "./components/Layout/Container";
import TagsList from "./components/Meals/TagsList";


function App() {
  const [visibleCart, setVisibleCart] = useState(false);

  const showCartHandler = () => {
    setVisibleCart(true)
  }

  const hideCartHandler = () => {
    setVisibleCart(false)
  }

  return (
    <div>
      {visibleCart && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <Container>
        <TagsList/>
        <Meals/>
      </Container>
    </div>
  );
}

export default App;
