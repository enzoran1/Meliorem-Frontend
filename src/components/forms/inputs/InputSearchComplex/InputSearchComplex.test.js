import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputSearchComplex from './InputSearchComplex';

describe('<InputSearchComplex />', () => {
  test('it should mount', () => {
    render(<InputSearchComplex />);
    
    const inputSearchComplex = screen.getByTestId('InputSearchComplex');

    expect(inputSearchComplex).toBeInTheDocument();
  });
});