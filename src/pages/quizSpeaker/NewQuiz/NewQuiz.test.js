import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewQuiz from './NewQuiz';

describe('<NewQuiz />', () => {
  test('it should mount', () => {
    render(<NewQuiz />);
    
    const newQuiz = screen.getByTestId('NewQuiz');

    expect(newQuiz).toBeInTheDocument();
  });
});