import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactAutre from './ContactAutre';

describe('<ContactAutre />', () => {
  test('it should mount', () => {
    render(<ContactAutre />);
    
    const contactAutre = screen.getByTestId('ContactAutre');

    expect(contactAutre).toBeInTheDocument();
  });
});