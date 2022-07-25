import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonSwitch from './ButtonSwitch';

describe('<ButtonSwitch />', () => {
  test('it should mount', () => {
    render(<ButtonSwitch />);
    
    const buttonSwitch = screen.getByTestId('ButtonSwitch');

    expect(buttonSwitch).toBeInTheDocument();
  });
});