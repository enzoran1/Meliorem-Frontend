import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuizAdministrator from './QuizAdministrator';

describe('<QuizAdministrator />', () => {
  test('it should mount', () => {
    render(<QuizAdministrator />);
    
    const quizAdministrator = screen.getByTestId('QuizAdministrator');

    expect(quizAdministrator).toBeInTheDocument();
  });
});