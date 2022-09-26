import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputCheck from './InputCheck';

describe('<InputCheck />', () => {
  test('it should mount', () => {
    render(<InputCheck />);
    
    const inputCheck = screen.getByTestId('InputCheck');

    expect(inputCheck).toBeInTheDocument();
  });
});