import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputSelect from './InputSelect';

describe('<InputSelect />', () => {
  test('it should mount', () => {
    render(<InputSelect />);
    
    const inputSelect = screen.getByTestId('InputSelect');

    expect(inputSelect).toBeInTheDocument();
  });
});