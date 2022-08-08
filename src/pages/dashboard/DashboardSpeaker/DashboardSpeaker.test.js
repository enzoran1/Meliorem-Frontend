import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DashboardSpeaker from './DashboardSpeaker';

describe('<DashboardSpeaker />', () => {
  test('it should mount', () => {
    render(<DashboardSpeaker />);
    
    const dashboardSpeaker = screen.getByTestId('DashboardSpeaker');

    expect(dashboardSpeaker).toBeInTheDocument();
  });
});