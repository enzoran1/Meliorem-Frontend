import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Status from './Status';

describe('<Status />', () => {
  test('it should mount', () => {
    render(<Status />);
    
    const status = screen.getByTestId('Status');

    expect(status).toBeInTheDocument();
  });
});