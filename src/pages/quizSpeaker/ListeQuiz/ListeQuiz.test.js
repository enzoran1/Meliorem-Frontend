import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListeQuiz from './ListeQuiz';

describe('<ListeQuiz />', () => {
  test('it should mount', () => {
    render(<ListeQuiz />);
    
    const listeQuiz = screen.getByTestId('ListeQuiz');

    expect(listeQuiz).toBeInTheDocument();
  });
});