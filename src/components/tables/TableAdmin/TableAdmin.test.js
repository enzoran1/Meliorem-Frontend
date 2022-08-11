import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TableAdmin from './TableAdmin';

describe('<TableAdmin />', () => {
  test('it should mount', () => {
    render(<TableAdmin />);
    
    const tableAdmin = screen.getByTestId('TableAdmin');

    expect(tableAdmin).toBeInTheDocument();
  });
});