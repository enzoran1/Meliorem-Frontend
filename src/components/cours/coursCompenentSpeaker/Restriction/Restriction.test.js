import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Restriction from './Restriction';

describe('<Restriction />', () => {
  test('it should mount', () => {
    render(<Restriction />);
    
    const restriction = screen.getByTestId('Restriction');

    expect(restriction).toBeInTheDocument();
  });
});