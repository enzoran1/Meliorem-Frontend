import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CoursCardsProgress from './CoursCardsProgress';

describe('<CoursCardsProgress />', () => {
  test('it should mount', () => {
    render(<CoursCardsProgress />);
    
    const coursCardsProgress = screen.getByTestId('CoursCardsProgress');

    expect(coursCardsProgress).toBeInTheDocument();
  });
});