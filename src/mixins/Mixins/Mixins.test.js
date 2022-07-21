import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Mixins from './Mixins';

describe('<Mixins />', () => {
  test('it should mount', () => {
    render(<Mixins />);
    
    const mixins = screen.getByTestId('Mixins');

    expect(mixins).toBeInTheDocument();
  });
});