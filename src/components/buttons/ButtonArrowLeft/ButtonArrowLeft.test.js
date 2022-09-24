import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonArrowLeft from './ButtonArrowLeft';

describe('<ButtonArrowLeft />', () => {
  test('it should mount', () => {
    render(<ButtonArrowLeft />);
    
    const buttonArrowLeft = screen.getByTestId('ButtonArrowLeft');

    expect(buttonArrowLeft).toBeInTheDocument();
  });
});