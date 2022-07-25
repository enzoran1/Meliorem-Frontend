import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonArrowSolid from './ButtonArrowSolid';

describe('<ButtonArrowSolid />', () => {
  test('it should mount', () => {
    render(<ButtonArrowSolid />);
    
    const buttonArrowSolid = screen.getByTestId('ButtonArrowSolid');

    expect(buttonArrowSolid).toBeInTheDocument();
  });
});