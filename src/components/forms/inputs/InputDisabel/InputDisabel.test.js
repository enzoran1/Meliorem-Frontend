import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputDisabel from './InputDisabel';

describe('<InputDisabel />', () => {
  test('it should mount', () => {
    render(<InputDisabel />);
    
    const inputDisabel = screen.getByTestId('InputDisabel');

    expect(inputDisabel).toBeInTheDocument();
  });
});