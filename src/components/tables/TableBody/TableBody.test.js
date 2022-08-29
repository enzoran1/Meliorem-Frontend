import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TableBody from './TableBody';

describe('<TableBody />', () => {
  test('it should mount', () => {
    render(<TableBody />);
    
    const tableBody = screen.getByTestId('TableBody');

    expect(tableBody).toBeInTheDocument();
  });
});