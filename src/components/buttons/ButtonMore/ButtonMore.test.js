import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonMore from './ButtonMore';

describe('<ButtonMore />', () => {
  test('it should mount', () => {
    render(<ButtonMore />);
    
    const buttonMore = screen.getByTestId('ButtonMore');

    expect(buttonMore).toBeInTheDocument();
  });
});