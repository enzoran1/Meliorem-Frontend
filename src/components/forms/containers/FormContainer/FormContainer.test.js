import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormContainer from './FormContainer';

describe('<FormContainer />', () => {
  test('it should mount', () => {
    render(<FormContainer />);
    
    const formContainer = screen.getByTestId('FormContainer');

    expect(formContainer).toBeInTheDocument();
  });
});