import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputArea from './InputArea';

describe('<InputArea />', () => {
  test('it should mount', () => {
    render(<InputArea />);
    
    const inputArea = screen.getByTestId('InputArea');

    expect(inputArea).toBeInTheDocument();
  });
});