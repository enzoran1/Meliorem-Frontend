import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListeUtilisateurs from './ListeUtilisateurs';

describe('<ListeUtilisateurs />', () => {
  test('it should mount', () => {
    render(<ListeUtilisateurs />);
    
    const listeUtilisateurs = screen.getByTestId('ListeUtilisateurs');

    expect(listeUtilisateurs).toBeInTheDocument();
  });
});