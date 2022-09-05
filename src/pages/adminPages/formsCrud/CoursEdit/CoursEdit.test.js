import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CoursEdit from './CoursEdit';

describe('<CoursEdit />', () => {
  test('it should mount', () => {
    render(<CoursEdit />);
    
    const coursEdit = screen.getByTestId('CoursEdit');

    expect(coursEdit).toBeInTheDocument();
  });
});