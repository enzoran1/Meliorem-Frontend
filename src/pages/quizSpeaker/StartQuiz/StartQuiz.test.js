import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StartQuiz from './StartQuiz';

describe('<StartQuiz />', () => {
  test('it should mount', () => {
    render(<StartQuiz />);
    
    const startQuiz = screen.getByTestId('StartQuiz');

    expect(startQuiz).toBeInTheDocument();
  });
});