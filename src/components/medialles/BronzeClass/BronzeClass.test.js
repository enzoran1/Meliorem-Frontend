import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BronzeClass from './BronzeClass';

describe('<BronzeClass />', () => {
  test('it should mount', () => {
    render(<BronzeClass />);
    
    const bronzeClass = screen.getByTestId('BronzeClass');

    expect(bronzeClass).toBeInTheDocument();
  });
});