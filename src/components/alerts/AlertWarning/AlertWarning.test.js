import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AlertWarning from './AlertWarning';

describe('<AlertWarning />', () => {
  test('it should mount', () => {
    render(<AlertWarning />);
    
    const alertWarning = screen.getByTestId('AlertWarning');

    expect(alertWarning).toBeInTheDocument();
  });
});