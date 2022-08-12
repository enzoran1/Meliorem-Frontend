import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListeUtilisateursAdmin from './ListeUtilisateursAdmin';

describe('<ListeUtilisateursAdmin />', () => {
  test('it should mount', () => {
    render(<ListeUtilisateursAdmin />);
    
    const listeUtilisateursAdmin = screen.getByTestId('ListeUtilisateursAdmin');

    expect(listeUtilisateursAdmin).toBeInTheDocument();
  });
});