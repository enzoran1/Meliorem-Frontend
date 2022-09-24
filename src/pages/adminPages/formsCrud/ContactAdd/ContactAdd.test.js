import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactAdd from './ContactAdd';

describe('<ContactAdd />', () => {
  test('it should mount', () => {
    render(<ContactAdd />);
    
    const contactAdd = screen.getByTestId('ContactAdd');

    expect(contactAdd).toBeInTheDocument();
  });
});