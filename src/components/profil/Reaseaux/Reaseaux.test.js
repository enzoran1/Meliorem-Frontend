import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Reaseaux from './Reaseaux';

describe('<Reaseaux />', () => {
  test('it should mount', () => {
    render(<Reaseaux />);
    
    const reaseaux = screen.getByTestId('Reaseaux');

    expect(reaseaux).toBeInTheDocument();
  });
});