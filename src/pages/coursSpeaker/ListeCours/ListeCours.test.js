import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListeCours from './ListeCours';

describe('<ListeCours />', () => {
  test('it should mount', () => {
    render(<ListeCours />);
    
    const listeCours = screen.getByTestId('ListeCours');

    expect(listeCours).toBeInTheDocument();
  });
});