import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardSuperAdmin from './CardSuperAdmin';

describe('<CardSuperAdmin />', () => {
  test('it should mount', () => {
    render(<CardSuperAdmin />);
    
    const cardSuperAdmin = screen.getByTestId('CardSuperAdmin');

    expect(cardSuperAdmin).toBeInTheDocument();
  });
});