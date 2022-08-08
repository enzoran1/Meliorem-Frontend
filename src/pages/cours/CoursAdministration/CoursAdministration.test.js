import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CoursAdministration from './CoursAdministration';

describe('<CoursAdministration />', () => {
  test('it should mount', () => {
    render(<CoursAdministration />);
    
    const coursAdministration = screen.getByTestId('CoursAdministration');

    expect(coursAdministration).toBeInTheDocument();
  });
});