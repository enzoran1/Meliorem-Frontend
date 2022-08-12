import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListeBadgesAutres from './ListeBadgesAutres';

describe('<ListeBadgesAutres />', () => {
  test('it should mount', () => {
    render(<ListeBadgesAutres />);
    
    const listeBadgesAutres = screen.getByTestId('ListeBadgesAutres');

    expect(listeBadgesAutres).toBeInTheDocument();
  });
});