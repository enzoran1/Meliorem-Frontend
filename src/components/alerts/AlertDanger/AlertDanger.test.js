import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AlertDanger from './AlertDanger';

describe('<AlertDanger />', () => {
  test('it should mount', () => {
    render(<AlertDanger />);
    
    const alertDanger = screen.getByTestId('AlertDanger');

    expect(alertDanger).toBeInTheDocument();
  });
});