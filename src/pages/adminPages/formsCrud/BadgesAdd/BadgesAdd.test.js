import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BadgesAdd from './BadgesAdd';

describe('<BadgesAdd />', () => {
  test('it should mount', () => {
    render(<BadgesAdd />);
    
    const badgesAdd = screen.getByTestId('BadgesAdd');

    expect(badgesAdd).toBeInTheDocument();
  });
});