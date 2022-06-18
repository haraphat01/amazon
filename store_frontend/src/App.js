import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homescreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Amazon</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>List Products</main>
        <Container>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<Homescreen />} />
          </Routes>
        </Container>
        <Container>
          {' '}
          <footer>
            <div>All right reserved</div>
          </footer>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
