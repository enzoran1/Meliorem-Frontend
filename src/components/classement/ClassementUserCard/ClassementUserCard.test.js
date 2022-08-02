import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClassementUserCard from './ClassementUserCard';

describe('<ClassementUserCard />', () => {
  test('it should mount', () => {
    render(<ClassementUserCard />);
    
    const classementUserCard = screen.getByTestId('ClassementUserCard');

    expect(classementUserCard).toBeInTheDocument();
  });
});