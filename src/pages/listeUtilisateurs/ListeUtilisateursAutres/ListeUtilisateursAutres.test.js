import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListeUtilisateursAutres from './ListeUtilisateursAutres';

describe('<ListeUtilisateursAutres />', () => {
  test('it should mount', () => {
    render(<ListeUtilisateursAutres />);
    
    const listeUtilisateursAutres = screen.getByTestId('ListeUtilisateursAutres');

    expect(listeUtilisateursAutres).toBeInTheDocument();
  });
});