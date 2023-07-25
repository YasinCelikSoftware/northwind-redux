import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../../redux/actions/categoryActions';
import {saveProduct} from '../../redux/actions/productActions';
import ProductDetail from './ProductDetail';
import {useNavigate, useParams} from 'react-router-dom';

function AddOrUpdateProduct () {
  const dispatch = useDispatch ();
  const {productId} = useParams ();
  const products = useSelector (state => state.productListReducer);
  const categories = useSelector (state => state.categoryListReducer);
  const navigate = useNavigate ();

  const getProductById = (products, productId) => {
    return products.find (product => product.id == productId) || null;
  };

  const myProduct = getProductById (products, productId);
  const [product, setProduct] = useState (myProduct || {});

  useEffect (
    () => {
      if (categories.length === 0) {
        dispatch (getCategories ());
      }
      setProduct (myProduct || {});
    },
    [myProduct, categories, dispatch]
  );

  function handleChange (event) {
    const {name, value} = event.target;
    setProduct (previousProduct => ({
      ...previousProduct,
      [name]: name === 'categoryId' ? parseInt (value, 10) : value,
    }));
  }

  function handleSave (event) {
    event.preventDefault ();
    dispatch (saveProduct (product)).then (() => {
      navigate ('/');
    });
  }

  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
}

export default AddOrUpdateProduct;
