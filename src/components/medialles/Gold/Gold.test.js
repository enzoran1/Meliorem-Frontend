import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gold from './Gold';

describe('<Gold />', () => {
  test('it should mount', () => {
    render(<Gold />);
    
    const gold = screen.getByTestId('Gold');

    expect(gold).toBeInTheDocument();
  });
});