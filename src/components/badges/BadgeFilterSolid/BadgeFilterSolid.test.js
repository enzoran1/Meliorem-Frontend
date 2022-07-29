import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BadgeFilterSolid from './BadgeFilterSolid';

describe('<BadgeFilterSolid />', () => {
  test('it should mount', () => {
    render(<BadgeFilterSolid />);
    
    const badgeFilterSolid = screen.getByTestId('BadgeFilterSolid');

    expect(badgeFilterSolid).toBeInTheDocument();
  });
});