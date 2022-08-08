import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DashboardAdministrator from './DashboardAdministrator';

describe('<DashboardAdministrator />', () => {
  test('it should mount', () => {
    render(<DashboardAdministrator />);
    
    const dashboardAdministrator = screen.getByTestId('DashboardAdministrator');

    expect(dashboardAdministrator).toBeInTheDocument();
  });
});