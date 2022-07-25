import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonPencils from './ButtonPencils';

describe('<ButtonPencils />', () => {
  test('it should mount', () => {
    render(<ButtonPencils />);
    
    const buttonPencils = screen.getByTestId('ButtonPencils');

    expect(buttonPencils).toBeInTheDocument();
  });
});