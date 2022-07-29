import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuizView from './QuizView';

describe('<QuizView />', () => {
  test('it should mount', () => {
    render(<QuizView />);
    
    const quizView = screen.getByTestId('QuizView');

    expect(quizView).toBeInTheDocument();
  });
});