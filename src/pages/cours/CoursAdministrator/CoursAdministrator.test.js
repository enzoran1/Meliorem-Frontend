import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CoursAdministrator from './CoursAdministrator';

describe('<CoursAdministrator />', () => {
  test('it should mount', () => {
    render(<CoursAdministrator />);
    
    const coursAdministrator = screen.getByTestId('CoursAdministrator');

    expect(coursAdministrator).toBeInTheDocument();
  });
});