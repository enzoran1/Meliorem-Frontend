import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonDelete from './ButtonDelete';

describe('<ButtonDelete />', () => {
  test('it should mount', () => {
    render(<ButtonDelete />);
    
    const buttonDelete = screen.getByTestId('ButtonDelete');

    expect(buttonDelete).toBeInTheDocument();
  });
});