import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuizResult from './QuizResult';

describe('<QuizResult />', () => {
  test('it should mount', () => {
    render(<QuizResult />);
    
    const quizResult = screen.getByTestId('QuizResult');

    expect(quizResult).toBeInTheDocument();
  });
});