import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GlobalyQuiz from './GlobalyQuiz';

describe('<GlobalyQuiz />', () => {
  test('it should mount', () => {
    render(<GlobalyQuiz />);
    
    const globalyQuiz = screen.getByTestId('GlobalyQuiz');

    expect(globalyQuiz).toBeInTheDocument();
  });
});