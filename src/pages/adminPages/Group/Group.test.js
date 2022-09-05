import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Group from './Group';

describe('<Group />', () => {
  test('it should mount', () => {
    render(<Group />);
    
    const group = screen.getByTestId('Group');

    expect(group).toBeInTheDocument();
  });
});