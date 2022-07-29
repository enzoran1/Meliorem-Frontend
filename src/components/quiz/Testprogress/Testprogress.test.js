import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Testprogress from './Testprogress';

describe('<Testprogress />', () => {
  test('it should mount', () => {
    render(<Testprogress />);
    
    const testprogress = screen.getByTestId('Testprogress');

    expect(testprogress).toBeInTheDocument();
  });
});