import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CoursRoundProgress from './CoursRoundProgress';

describe('<CoursRoundProgress />', () => {
  test('it should mount', () => {
    render(<CoursRoundProgress />);
    
    const coursRoundProgress = screen.getByTestId('CoursRoundProgress');

    expect(coursRoundProgress).toBeInTheDocument();
  });
});