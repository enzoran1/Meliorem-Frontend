import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonArrowOutlinePurpelRotade from './ButtonArrowOutlinePurpel';

describe('<ButtonArrowOutlinePurpelRotade />', () => {
  test('it should mount', () => {
    render(<ButtonArrowOutlinePurpelRotade />);
    
    const buttonArrowOutlinePurpelRotade = screen.getByTestId('ButtonArrowOutlinePurpel');

    expect(buttonArrowOutlinePurpelRotade).toBeInTheDocument();
  });
});