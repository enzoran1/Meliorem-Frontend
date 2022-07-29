import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuizAvatar from './QuizAvatar';

describe('<QuizAvatar />', () => {
  test('it should mount', () => {
    render(<QuizAvatar />);
    
    const quizAvatar = screen.getByTestId('QuizAvatar');

    expect(quizAvatar).toBeInTheDocument();
  });
});