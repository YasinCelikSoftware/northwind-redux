import {Container} from 'reactstrap';
import Navi from '../navi/Navi';
import Dashboard from './Dashboard';
import {Route, Routes} from 'react-router-dom';
import CartDetail from '../cart/CartDetail';
import NotFound from '../common/NotFound';
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';
import '../../css/App.css';

function App () {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/products" exact element={<Dashboard />} />
        <Route path="/cart" exact element={<CartDetail />} />
        <Route path="/saveproduct" element={<AddOrUpdateProduct />} />
        <Route
          path="/saveproduct/:productId"
          element={<AddOrUpdateProduct />}
        />
        <Route path="*" element={<NotFound />} />

      </Routes>

    </Container>
  );
}

export default App;
