import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardContact from './CardContact';

describe('<CardContact />', () => {
  test('it should mount', () => {
    render(<CardContact />);
    
    const cardContact = screen.getByTestId('CardContact');

    expect(cardContact).toBeInTheDocument();
  });
});