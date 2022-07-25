import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonArrowOutlineWhite from './ButtonArrowOutlineWhite';

describe('<ButtonArrowOutlineWhite />', () => {
  test('it should mount', () => {
    render(<ButtonArrowOutlineWhite />);
    
    const buttonArrowOutlineWhite = screen.getByTestId('ButtonArrowOutlineWhite');

    expect(buttonArrowOutlineWhite).toBeInTheDocument();
  });
});