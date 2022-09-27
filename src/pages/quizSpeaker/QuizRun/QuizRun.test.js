import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuizRun from './QuizRun';

describe('<QuizRun />', () => {
  test('it should mount', () => {
    render(<QuizRun />);
    
    const quizRun = screen.getByTestId('QuizRun');

    expect(quizRun).toBeInTheDocument();
  });
});