import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DashboardAdministration from './DashboardAdministration';

describe('<DashboardAdministration />', () => {
  test('it should mount', () => {
    render(<DashboardAdministration />);
    
    const dashboardAdministration = screen.getByTestId('DashboardAdministration');

    expect(dashboardAdministration).toBeInTheDocument();
  });
});