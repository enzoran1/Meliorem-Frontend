import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EditQuiz from './EditQuiz';

describe('<EditQuiz />', () => {
  test('it should mount', () => {
    render(<EditQuiz />);
    
    const editQuiz = screen.getByTestId('EditQuiz');

    expect(editQuiz).toBeInTheDocument();
  });
});