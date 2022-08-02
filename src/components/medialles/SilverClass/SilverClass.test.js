import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SilverClass from './SilverClass';

describe('<SilverClass />', () => {
  test('it should mount', () => {
    render(<SilverClass />);
    
    const silverClass = screen.getByTestId('SilverClass');

    expect(silverClass).toBeInTheDocument();
  });
});