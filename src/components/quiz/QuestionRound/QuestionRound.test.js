import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuestionRound from './QuestionRound';

describe('<QuestionRound />', () => {
  test('it should mount', () => {
    render(<QuestionRound />);
    
    const questionRound = screen.getByTestId('QuestionRound');

    expect(questionRound).toBeInTheDocument();
  });
});