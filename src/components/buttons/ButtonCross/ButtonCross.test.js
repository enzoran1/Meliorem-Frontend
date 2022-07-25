import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonCross from './ButtonCross';

describe('<ButtonCross />', () => {
  test('it should mount', () => {
    render(<ButtonCross />);
    
    const buttonCross = screen.getByTestId('ButtonCross');

    expect(buttonCross).toBeInTheDocument();
  });
});