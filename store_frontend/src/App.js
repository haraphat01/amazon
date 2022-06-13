import './App.css';
import data from './data';

function App() {
  return (
    <div>
      <header className="">
        <a className="App-link" href="/">
          React
        </a>
      </header>
      <main>List Products</main>
      <div>Featured Products</div>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <a href={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </a>
            <div className="product-info">
            <a href={`/product/${product.slug}`}>
              <p>{product.name}</p>
              </a>
              <p><strong>${product.price}</strong></p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
