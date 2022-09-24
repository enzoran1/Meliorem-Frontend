import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddQuestion from './AddQuestion';

describe('<AddQuestion />', () => {
  test('it should mount', () => {
    render(<AddQuestion />);
    
    const addQuestion = screen.getByTestId('AddQuestion');

    expect(addQuestion).toBeInTheDocument();
  });
});