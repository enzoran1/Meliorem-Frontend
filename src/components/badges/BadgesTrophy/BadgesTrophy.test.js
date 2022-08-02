import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BadgesTrophy from './BadgesTrophy';

describe('<BadgesTrophy />', () => {
  test('it should mount', () => {
    render(<BadgesTrophy />);
    
    const badgesTrophy = screen.getByTestId('BadgesTrophy');

    expect(badgesTrophy).toBeInTheDocument();
  });
});