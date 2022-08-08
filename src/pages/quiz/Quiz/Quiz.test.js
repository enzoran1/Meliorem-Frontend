import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quiz from './Quiz';

describe('<Quiz />', () => {
  test('it should mount', () => {
    render(<Quiz />);
    
    const quiz = screen.getByTestId('Quiz');

    expect(quiz).toBeInTheDocument();
  });
});