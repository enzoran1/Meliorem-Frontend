import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonViewMore from './ButtonViewMore';

describe('<ButtonViewMore />', () => {
  test('it should mount', () => {
    render(<ButtonViewMore />);
    
    const buttonViewMore = screen.getByTestId('ButtonViewMore');

    expect(buttonViewMore).toBeInTheDocument();
  });
});