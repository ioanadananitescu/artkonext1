
import { useState } from 'react';
import commerce from '../utils/commerce';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create the product using the Commerce.js client
      const product = await commerce.products.create({
        name,
        price: parseFloat(price),
      });

      console.log('Product created:', product);
      // Reset the form
      setName('');
      setPrice('');
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={handlePriceChange} />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;