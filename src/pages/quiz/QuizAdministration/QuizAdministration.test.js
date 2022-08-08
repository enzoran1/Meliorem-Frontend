import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuizAdministration from './QuizAdministration';

describe('<QuizAdministration />', () => {
  test('it should mount', () => {
    render(<QuizAdministration />);
    
    const quizAdministration = screen.getByTestId('QuizAdministration');

    expect(quizAdministration).toBeInTheDocument();
  });
});