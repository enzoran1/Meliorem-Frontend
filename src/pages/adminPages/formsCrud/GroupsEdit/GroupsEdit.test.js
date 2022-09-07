import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GroupsEdit from './GroupsEdit';

describe('<GroupsEdit />', () => {
  test('it should mount', () => {
    render(<GroupsEdit />);
    
    const groupsEdit = screen.getByTestId('GroupsEdit');

    expect(groupsEdit).toBeInTheDocument();
  });
});