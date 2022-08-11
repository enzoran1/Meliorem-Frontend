import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from './Contact';

describe('<Contact />', () => {
  test('it should mount', () => {
    render(<Contact />);
    
    const contact = screen.getByTestId('Contact');

    expect(contact).toBeInTheDocument();
  });
});