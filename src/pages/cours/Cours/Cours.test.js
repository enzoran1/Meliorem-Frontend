import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cours from './Cours';

describe('<Cours />', () => {
  test('it should mount', () => {
    render(<Cours />);
    
    const cours = screen.getByTestId('Cours');

    expect(cours).toBeInTheDocument();
  });
});