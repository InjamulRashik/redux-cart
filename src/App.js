import logo from "./logo.svg";
import "./App.css";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Cart></Cart>
      <Shop></Shop>
    </div>
  );
}

export default App;
