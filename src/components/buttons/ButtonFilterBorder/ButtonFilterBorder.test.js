import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonFilterBorder from './ButtonFilterBorder';

describe('<ButtonFilterBorder />', () => {
  test('it should mount', () => {
    render(<ButtonFilterBorder />);
    
    const buttonFilterBorder = screen.getByTestId('ButtonFilterBorder');

    expect(buttonFilterBorder).toBeInTheDocument();
  });
});