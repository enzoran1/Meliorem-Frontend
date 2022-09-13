import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputsNumber from './InputsNumber';

describe('<InputsNumber />', () => {
  test('it should mount', () => {
    render(<InputsNumber />);
    
    const inputsNumber = screen.getByTestId('InputsNumber');

    expect(inputsNumber).toBeInTheDocument();
  });
});