import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Resume from './Resume';

describe('<Resume />', () => {
  test('it should mount', () => {
    render(<Resume />);
    
    const resume = screen.getByTestId('Resume');

    expect(resume).toBeInTheDocument();
  });
});