import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuizStudent from './QuizStudent';

describe('<QuizStudent />', () => {
  test('it should mount', () => {
    render(<QuizStudent />);
    
    const quizStudent = screen.getByTestId('QuizStudent');

    expect(quizStudent).toBeInTheDocument();
  });
});