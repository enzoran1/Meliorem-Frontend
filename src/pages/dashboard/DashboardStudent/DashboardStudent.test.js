import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DashboardStudent from './DashboardStudent';

describe('<DashboardStudent />', () => {
  test('it should mount', () => {
    render(<DashboardStudent />);
    
    const dashboardStudent = screen.getByTestId('DashboardStudent');

    expect(dashboardStudent).toBeInTheDocument();
  });
});