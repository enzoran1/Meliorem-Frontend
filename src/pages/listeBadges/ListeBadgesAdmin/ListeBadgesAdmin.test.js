import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListeBadgesAdmin from './ListeBadgesAdmin';

describe('<ListeBadgesAdmin />', () => {
  test('it should mount', () => {
    render(<ListeBadgesAdmin />);
    
    const listeBadgesAdmin = screen.getByTestId('ListeBadgesAdmin');

    expect(listeBadgesAdmin).toBeInTheDocument();
  });
});