import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonAdd from './ButtonAdd';

describe('<ButtonAdd />', () => {
  test('it should mount', () => {
    render(<ButtonAdd />);
    
    const buttonAdd = screen.getByTestId('ButtonAdd');

    expect(buttonAdd).toBeInTheDocument();
  });
});