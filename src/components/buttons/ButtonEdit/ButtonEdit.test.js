import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonEdit from './ButtonEdit';

describe('<ButtonEdit />', () => {
  test('it should mount', () => {
    render(<ButtonEdit />);
    
    const buttonEdit = screen.getByTestId('ButtonEdit');

    expect(buttonEdit).toBeInTheDocument();
  });
});