import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GoldClass from './GoldClass';

describe('<GoldClass />', () => {
  test('it should mount', () => {
    render(<GoldClass />);
    
    const goldClass = screen.getByTestId('GoldClass');

    expect(goldClass).toBeInTheDocument();
  });
});