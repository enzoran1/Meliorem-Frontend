import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuizTitleProgress from './QuizTitleProgress';

describe('<QuizTitleProgress />', () => {
  test('it should mount', () => {
    render(<QuizTitleProgress />);
    
    const quizTitleProgress = screen.getByTestId('QuizTitleProgress');

    expect(quizTitleProgress).toBeInTheDocument();
  });
});