import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Trophy from './Trophy';

describe('<Trophy />', () => {
  test('it should mount', () => {
    render(<Trophy />);
    
    const trophy = screen.getByTestId('Trophy');

    expect(trophy).toBeInTheDocument();
  });
});