import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CrudAdd from './CrudAdd';

describe('<CrudAdd />', () => {
  test('it should mount', () => {
    render(<CrudAdd />);
    
    const crudAdd = screen.getByTestId('CrudAdd');

    expect(crudAdd).toBeInTheDocument();
  });
});