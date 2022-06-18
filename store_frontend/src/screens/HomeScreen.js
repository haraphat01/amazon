import { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
// import data from '../../../backend/data';
import axios from 'axios';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
function Homescreen() {
  //   const [products, setProducts] = useState([]);
  const [{ products, error, loading }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
    products: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }

      //   setProducts(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>Featured Products</div>
      <div className="products">
        {loading ? (
          <div>loading....</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Row>
            {products.map((product) => (
              <Col sm={6} md={4} lg={3} className="mb-3">
               <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}
export default Homescreen;
