import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonActivity from './ButtonActivity';

describe('<ButtonActivity />', () => {
  test('it should mount', () => {
    render(<ButtonActivity />);
    
    const buttonActivity = screen.getByTestId('ButtonActivity');

    expect(buttonActivity).toBeInTheDocument();
  });
});