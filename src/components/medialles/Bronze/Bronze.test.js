import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Bronze from './Bronze';

describe('<Bronze />', () => {
  test('it should mount', () => {
    render(<Bronze />);
    
    const bronze = screen.getByTestId('Bronze');

    expect(bronze).toBeInTheDocument();
  });
});