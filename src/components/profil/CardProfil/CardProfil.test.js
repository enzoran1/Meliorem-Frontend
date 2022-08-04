import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardProfil from './CardProfil';

describe('<CardProfil />', () => {
  test('it should mount', () => {
    render(<CardProfil />);
    
    const cardProfil = screen.getByTestId('CardProfil');

    expect(cardProfil).toBeInTheDocument();
  });
});