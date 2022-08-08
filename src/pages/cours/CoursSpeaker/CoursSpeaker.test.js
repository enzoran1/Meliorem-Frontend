import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CoursSpeaker from './CoursSpeaker';

describe('<CoursSpeaker />', () => {
  test('it should mount', () => {
    render(<CoursSpeaker />);
    
    const coursSpeaker = screen.getByTestId('CoursSpeaker');

    expect(coursSpeaker).toBeInTheDocument();
  });
});