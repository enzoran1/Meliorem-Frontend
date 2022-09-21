import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewCours from './NewCours';

describe('<NewCours />', () => {
  test('it should mount', () => {
    render(<NewCours />);
    
    const newCours = screen.getByTestId('NewCours');

    expect(newCours).toBeInTheDocument();
  });
});