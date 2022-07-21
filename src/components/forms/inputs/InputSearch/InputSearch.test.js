import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputSearch from './InputSearch';

describe('<InputSearch />', () => {
  test('it should mount', () => {
    render(<InputSearch />);
    
    const inputSearch = screen.getByTestId('InputSearch');

    expect(inputSearch).toBeInTheDocument();
  });
});