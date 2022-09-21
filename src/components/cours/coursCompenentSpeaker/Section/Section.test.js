import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Section from './Section';

describe('<Section />', () => {
  test('it should mount', () => {
    render(<Section />);
    
    const section = screen.getByTestId('Section');

    expect(section).toBeInTheDocument();
  });
});