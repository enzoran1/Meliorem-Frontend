import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputPassword from './InputPassword';

describe('<InputPassword />', () => {
  test('it should mount', () => {
    render(<InputPassword />);
    
    const inputPassword = screen.getByTestId('InputPassword');

    expect(inputPassword).toBeInTheDocument();
  });
});