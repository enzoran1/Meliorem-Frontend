import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonDefaultLogoRigth from './ButtonDefaultLogoRigth';

describe('<ButtonDefaultLogoRigth />', () => {
  test('it should mount', () => {
    render(<ButtonDefaultLogoRigth />);
    
    const buttonDefaultLogoRigth = screen.getByTestId('ButtonDefaultLogoRigth');

    expect(buttonDefaultLogoRigth).toBeInTheDocument();
  });
});