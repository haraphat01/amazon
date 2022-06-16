import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homescreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="">
          <a className="App-link" href="/">
            React
          </a>
        </header>
        <main>List Products</main>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen />} />
          <Route path="/" element={<Homescreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
