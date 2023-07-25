import {Container} from 'reactstrap';
import Navi from '../navi/Navi';
import Dashboard from './Dashboard';
import {Route, Routes} from 'react-router-dom';
import CartDetail from '../cart/CartDetail';
import NotFound from './NotFound';

function App () {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/products" exact element={<Dashboard />} />
        <Route path="/cart" exact element={<CartDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </Container>
  );
}

export default App;
