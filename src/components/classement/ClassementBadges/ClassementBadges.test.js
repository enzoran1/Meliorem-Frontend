import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClassementBadges from './ClassementBadges';

describe('<ClassementBadges />', () => {
  test('it should mount', () => {
    render(<ClassementBadges />);
    
    const classementBadges = screen.getByTestId('ClassementBadges');

    expect(classementBadges).toBeInTheDocument();
  });
});