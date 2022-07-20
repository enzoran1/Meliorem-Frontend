import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Variables from './Variables';

describe('<Variables />', () => {
  test('it should mount', () => {
    render(<Variables />);
    
    const variables = screen.getByTestId('Variables');

    expect(variables).toBeInTheDocument();
  });
});