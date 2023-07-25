import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from 'reactstrap';
import {bindActionCreators} from 'redux';
import * as cartActions from '../../redux/actions/cartActions';
import alertifyjs from 'alertifyjs';
import {Link} from 'react-router-dom';

class CartSummary extends Component {
  removeFromCart = cartItem => {
    this.props.actions.removeFromCart (cartItem);
    alertifyjs.error (cartItem.product.productName + ' sepetten çıkarıldı.');
  };

  renderEmpty () {
    return (
      <NavItem>
        <NavLink>Boş Sepet</NavLink>
      </NavItem>
    );
  }

  renderSummary () {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Sepet {'('}{this.props.cart.length}{')'}

        </DropdownToggle>
        <DropdownMenu end>
          {this.props.cart.map (cartItem => (
            <DropdownItem
              key={cartItem.product.id}
              className="d-flex justify-content-between"
            >
              <Badge color="success">{cartItem.quantity}</Badge>
              {cartItem.product.productName}
              <Badge
                color="danger"
                onClick={() => this.removeFromCart (cartItem)}
              >
                X
              </Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem><Link to="cart">Sepete Git</Link></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  render () {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderSummary ()
          : this.renderEmpty ()}
      </div>
    );
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

export default connect (mapStateToProps, mapDispatchToProps) (CartSummary);
