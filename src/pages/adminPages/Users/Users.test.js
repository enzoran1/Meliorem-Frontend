import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Users from './Users';

describe('<Users />', () => {
  test('it should mount', () => {
    render(<Users />);
    
    const users = screen.getByTestId('Users');

    expect(users).toBeInTheDocument();
  });
});