
import './App.css';
import Routing from './Component/Routing/Routing';
import { CartContext, CartContextProvider } from './Context/CartContext';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Routing />
      </CartContextProvider>
    </div>
  );
}

export default App;
