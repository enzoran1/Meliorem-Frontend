import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CoursStudent from './CoursStudent';

describe('<CoursStudent />', () => {
  test('it should mount', () => {
    render(<CoursStudent />);
    
    const coursStudent = screen.getByTestId('CoursStudent');

    expect(coursStudent).toBeInTheDocument();
  });
});