import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BadgesSucess from './BadgesSucess';

describe('<BadgesSucess />', () => {
  test('it should mount', () => {
    render(<BadgesSucess />);
    
    const badgesSucess = screen.getByTestId('BadgesSucess');

    expect(badgesSucess).toBeInTheDocument();
  });
});