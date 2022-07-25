import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonArrowOutlinePurpel from './ButtonArrowOutlinePurpel';

describe('<ButtonArrowOutlinePurpel />', () => {
  test('it should mount', () => {
    render(<ButtonArrowOutlinePurpel />);
    
    const buttonArrowOutlinePurpel = screen.getByTestId('ButtonArrowOutlinePurpel');

    expect(buttonArrowOutlinePurpel).toBeInTheDocument();
  });
});