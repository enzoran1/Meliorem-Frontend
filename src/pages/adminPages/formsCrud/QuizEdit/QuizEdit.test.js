import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuizEdit from './QuizEdit';

describe('<QuizEdit />', () => {
  test('it should mount', () => {
    render(<QuizEdit />);
    
    const quizEdit = screen.getByTestId('QuizEdit');

    expect(quizEdit).toBeInTheDocument();
  });
});