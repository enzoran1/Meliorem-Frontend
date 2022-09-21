import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddPage from './AddPage';

describe('<AddPage />', () => {
  test('it should mount', () => {
    render(<AddPage />);
    
    const addPage = screen.getByTestId('AddPage');

    expect(addPage).toBeInTheDocument();
  });
});