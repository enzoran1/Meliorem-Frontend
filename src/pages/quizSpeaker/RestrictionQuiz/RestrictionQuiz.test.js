import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RestrictionQuiz from './RestrictionQuiz';

describe('<RestrictionQuiz />', () => {
  test('it should mount', () => {
    render(<RestrictionQuiz />);
    
    const restrictionQuiz = screen.getByTestId('RestrictionQuiz');

    expect(restrictionQuiz).toBeInTheDocument();
  });
});