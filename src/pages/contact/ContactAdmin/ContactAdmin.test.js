import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactAdmin from './ContactAdmin';

describe('<ContactAdmin />', () => {
  test('it should mount', () => {
    render(<ContactAdmin />);
    
    const contactAdmin = screen.getByTestId('ContactAdmin');

    expect(contactAdmin).toBeInTheDocument();
  });
});