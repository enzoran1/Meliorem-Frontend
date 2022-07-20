import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputEmail from './InputEmail';

describe('<InputEmail />', () => {
  test('it should mount', () => {
    render(<InputEmail />);
    
    const inputEmail = screen.getByTestId('InputEmail');

    expect(inputEmail).toBeInTheDocument();
  });
});