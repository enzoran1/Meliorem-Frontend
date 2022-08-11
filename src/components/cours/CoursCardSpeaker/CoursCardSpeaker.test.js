import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CoursCardSpeaker from './CoursCardSpeaker';

describe('<CoursCardSpeaker />', () => {
  test('it should mount', () => {
    render(<CoursCardSpeaker />);
    
    const coursCardSpeaker = screen.getByTestId('CoursCardSpeaker');

    expect(coursCardSpeaker).toBeInTheDocument();
  });
});