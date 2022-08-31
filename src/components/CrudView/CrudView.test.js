import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CrudView from './CrudView';

describe('<CrudView />', () => {
  test('it should mount', () => {
    render(<CrudView />);
    
    const crudView = screen.getByTestId('CrudView');

    expect(crudView).toBeInTheDocument();
  });
});