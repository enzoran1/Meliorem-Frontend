import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonLogin from './ButtonLogin';

describe('<ButtonLogin />', () => {
  test('it should mount', () => {
    render(<ButtonLogin />);
    
    const buttonLogin = screen.getByTestId('ButtonLogin');

    expect(buttonLogin).toBeInTheDocument();
  });
});