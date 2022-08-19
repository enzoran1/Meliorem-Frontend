import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonFixedRigth from './ButtonFixedRigth';

describe('<ButtonFixedRigth />', () => {
  test('it should mount', () => {
    render(<ButtonFixedRigth />);
    
    const buttonFixedRigth = screen.getByTestId('ButtonFixedRigth');

    expect(buttonFixedRigth).toBeInTheDocument();
  });
});