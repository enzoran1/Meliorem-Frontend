import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonSup from './ButtonSup';

describe('<ButtonSup />', () => {
  test('it should mount', () => {
    render(<ButtonSup />);
    
    const buttonSup = screen.getByTestId('ButtonSup');

    expect(buttonSup).toBeInTheDocument();
  });
});