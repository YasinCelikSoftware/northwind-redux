import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as cartActions from '../../redux/actions/cartActions';
import {Table, Button} from 'reactstrap';
import alertifyjs from 'alertifyjs';

class CartDetail extends Component {
  removeFromCart = cartItem => {
    this.props.actions.removeFromCart (cartItem);
    alertifyjs.error (cartItem.product.productName + ' sepetten çıkarıldı.');
  };

  renderCart () {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>
              #
            </th>
            <th>
              Kategori No
            </th>
            <th>
              Ürün Adı
            </th>
            <th>
              Fiyat
            </th>
            <th>
              Stok Adedi
            </th>
            <th>
              Adet
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map (cartItem => (
            <tr key={cartItem.product.id}>
              <td>
                {cartItem.product.id}
              </td>
              <td>
                {cartItem.product.categoryId}
              </td>
              <td>
                {cartItem.product.productName}
              </td>
              <td>
                {cartItem.product.unitPrice}
              </td>
              <td>
                {cartItem.product.unitsInStock}
              </td>
              <td>
                {cartItem.quantity}
              </td>
              <td>
                <Button
                  color="danger"
                  onClick={() => this.removeFromCart (cartItem)}
                >
                  Sil
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  render () {
    return <div>{this.renderCart ()}</div>;
  }
}

function mapStateToProps (state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators (cartActions.removeFromCart, dispatch),
    },
  };
}

export default connect (mapStateToProps, mapDispatchToProps) (CartDetail);
