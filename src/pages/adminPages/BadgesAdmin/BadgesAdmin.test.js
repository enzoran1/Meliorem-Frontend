import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BadgesAdmin from './BadgesAdmin';

describe('<BadgesAdmin />', () => {
  test('it should mount', () => {
    render(<BadgesAdmin />);
    
    const badgesAdmin = screen.getByTestId('BadgesAdmin');

    expect(badgesAdmin).toBeInTheDocument();
  });
});