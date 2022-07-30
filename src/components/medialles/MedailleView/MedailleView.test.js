import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MedailleView from './MedailleView';

describe('<MedailleView />', () => {
  test('it should mount', () => {
    render(<MedailleView />);
    
    const medailleView = screen.getByTestId('MedailleView');

    expect(medailleView).toBeInTheDocument();
  });
});