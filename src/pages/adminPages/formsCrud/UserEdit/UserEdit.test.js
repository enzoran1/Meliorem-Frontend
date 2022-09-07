import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserEdit from './UserEdit';

describe('<UserEdit />', () => {
  test('it should mount', () => {
    render(<UserEdit />);
    
    const userEdit = screen.getByTestId('UserEdit');

    expect(userEdit).toBeInTheDocument();
  });
});