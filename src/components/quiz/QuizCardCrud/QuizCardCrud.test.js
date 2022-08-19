import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuizCardCrud from './QuizCardCrud';

describe('<QuizCardCrud />', () => {
  test('it should mount', () => {
    render(<QuizCardCrud />);
    
    const quizCardCrud = screen.getByTestId('QuizCardCrud');

    expect(quizCardCrud).toBeInTheDocument();
  });
});