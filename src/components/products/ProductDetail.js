import React from 'react';
import TextInput from '../toolbox/TextInput';
import SelectInput from '../toolbox/SelectInput';
import {Badge} from 'reactstrap';
import '../../css/App.css';

const ProductDetail = ({categories, product, onSave, onChange}) => {
  return (
    <form onSubmit={onSave}>
      <h2>
        <Badge color={product.id ? 'info' : 'primary'}>
          <span className="badge-span">
            {product.id ? 'Güncelle' : 'Ekle'}
          </span>
        </Badge>
      </h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        placeHolder={'Giriniz'}
        error="Hata"
      />

      <SelectInput
        name="categoryId"
        label="Category"
        value={product.categoryId}
        defaultOption={'Seçiniz'}
        options={categories.map (category => ({
          value: category.id,
          text: category.categoryName,
        }))}
        onChange={onChange}
        error="Hata"
      />

      <TextInput
        name="unitPrice"
        label="Unit Price"
        value={product.unitPrice}
        onChange={onChange}
        placeHolder={'Giriniz'}
        error="Hata"
      />

      <TextInput
        name="quantityPerUnit"
        label="Quantity Per Unit"
        value={product.quantityPerUnit}
        onChange={onChange}
        placeHolder={'Giriniz'}
        error="Hata"
      />

      <TextInput
        name="unitsInStock"
        label="Units In Stock"
        value={product.unitsInStock}
        onChange={onChange}
        placeHolder={'Giriniz'}
        error="Hata"
      />

      <button type="submit" className="btn btn-success">Save</button>
    </form>
  );
};

export default ProductDetail;
