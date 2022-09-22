import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DocumentCkeditor from './DocumentCkeditor';

describe('<DocumentCkeditor />', () => {
  test('it should mount', () => {
    render(<DocumentCkeditor />);
    
    const documentCkeditor = screen.getByTestId('DocumentCkeditor');

    expect(documentCkeditor).toBeInTheDocument();
  });
});