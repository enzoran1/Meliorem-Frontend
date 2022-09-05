import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Load from './Load';

describe('<Load />', () => {
  test('it should mount', () => {
    render(<Load />);
    
    const load = screen.getByTestId('Load');

    expect(load).toBeInTheDocument();
  });
});