import React, {Component} from 'react';
import {connect} from 'react-redux';

class ProductList extends Component {
  render () {
    return (
      <div>
        <h3>
          {this.props.currentCategory.categoryName}
        </h3>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    currentCategory: state.changeCategoryReducer,
  };
}

function mapDispatchToProps (dispatch) {}

export default connect (mapStateToProps, mapDispatchToProps) (ProductList);
