import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EntityView from './EntityView';

describe('<EntityView />', () => {
  test('it should mount', () => {
    render(<EntityView />);
    
    const entityView = screen.getByTestId('EntityView');

    expect(entityView).toBeInTheDocument();
  });
});