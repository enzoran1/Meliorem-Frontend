import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from './Modal';

describe('<Modal />', () => {
  test('it should mount', () => {
    render(<Modal />);
    
    const modal = screen.getByTestId('Modal');

    expect(modal).toBeInTheDocument();
  });
});