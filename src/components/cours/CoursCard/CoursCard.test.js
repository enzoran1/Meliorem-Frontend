import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CoursCard from './CoursCard';

describe('<CoursCard />', () => {
  test('it should mount', () => {
    render(<CoursCard />);
    
    const coursCard = screen.getByTestId('CoursCard');

    expect(coursCard).toBeInTheDocument();
  });
});