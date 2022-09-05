import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CrudEdit from './CrudEdit';

describe('<CrudEdit />', () => {
  test('it should mount', () => {
    render(<CrudEdit />);
    
    const crudEdit = screen.getByTestId('CrudEdit');

    expect(crudEdit).toBeInTheDocument();
  });
});