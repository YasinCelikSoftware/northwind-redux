import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Badge, Button, Table} from 'reactstrap';
import {bindActionCreators} from 'redux';
import * as productActions from '../../redux/actions/productActions';
import * as cartActions from '../../redux/actions/cartActions';
import alertify from 'alertifyjs';
import {Link} from 'react-router-dom';

class ProductList extends Component {
  componentDidMount () {
    this.props.actions.getProducts ();
  }

  addToCart = product => {
    this.props.actions.addToCart ({product, quantity: 1});
    alertify.success (product.productName + ' sepete eklendi.');
  };
  render () {
    return (
      <div>
        <h3>
          <Badge color="warning">
            <span className="badge-span">Products</span>
          </Badge>
          <Badge color="success">
            {this.props.currentCategory.categoryName}

          </Badge>
        </h3>

        <Table>
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                Product Name
              </th>
              <th>
                Quantity
              </th>
              <th>
                Stock
              </th>
              <th>
                Unit Price
              </th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.products.map (product => (
              <tr key={product.id}>
                <th scope="row">
                  {product.id}
                </th>
                <td>
                  <Link to={'/saveproduct/' + product.id}>
                    {product.productName}
                  </Link>
                </td>
                <td>
                  {product.quantityPerUnit}
                </td>
                <td>
                  {product.unitsInStock}
                </td>
                <td>
                  {product.unitPrice}
                </td>
                <td>
                  <Button
                    color="primary"
                    onClick={() => {
                      this.addToCart (product);
                    }}
                  >
                    Ekle
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>;

      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators (productActions.getProducts, dispatch),
      addToCart: bindActionCreators (cartActions.addToCart, dispatch),
    },
  };
}

export default connect (mapStateToProps, mapDispatchToProps) (ProductList);
