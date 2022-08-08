import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuizSpeaker from './QuizSpeaker';

describe('<QuizSpeaker />', () => {
  test('it should mount', () => {
    render(<QuizSpeaker />);
    
    const quizSpeaker = screen.getByTestId('QuizSpeaker');

    expect(quizSpeaker).toBeInTheDocument();
  });
});