import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListeBadges from './ListeBadges';

describe('<ListeBadges />', () => {
  test('it should mount', () => {
    render(<ListeBadges />);
    
    const listeBadges = screen.getByTestId('ListeBadges');

    expect(listeBadges).toBeInTheDocument();
  });
});