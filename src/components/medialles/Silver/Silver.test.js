import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Silver from './Silver';

describe('<Silver />', () => {
  test('it should mount', () => {
    render(<Silver />);
    
    const silver = screen.getByTestId('Silver');

    expect(silver).toBeInTheDocument();
  });
});