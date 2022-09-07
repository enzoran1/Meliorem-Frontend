import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BadgesEdit from './BadgesEdit';

describe('<BadgesEdit />', () => {
  test('it should mount', () => {
    render(<BadgesEdit />);
    
    const badgesEdit = screen.getByTestId('BadgesEdit');

    expect(badgesEdit).toBeInTheDocument();
  });
});