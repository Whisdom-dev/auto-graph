import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductCard from './ProductCard';

const product = {
  id: 1,
  name: 'Test Product',
  price: '€99.99',
  image: 'test-image.jpg',
};

describe('ProductCard', () => {
  it('renders product name, formatted price, and image', () => {
    render(
      <MemoryRouter>
        <ProductCard product={product} addToCart={() => {}} />
      </MemoryRouter>
    );
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('€99.99')).toBeInTheDocument();
    expect(screen.getByAltText(/Product: Test Product/i)).toBeInTheDocument();
  });

  it('calls addToCart when Add to Cart button is clicked', () => {
    const addToCart = jest.fn();
    render(
      <MemoryRouter>
        <ProductCard product={product} addToCart={addToCart} />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole('button', { name: /add test product to cart/i }));
    expect(addToCart).toHaveBeenCalledWith(product);
  });
}); 