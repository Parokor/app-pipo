import { render, screen } from '@testing-library/react';
import { MountainRetreat } from '../vr-addons/mountain-retreat/mountain_retreat';

describe('MountainRetreat', () => {
  test('renders MountainRetreat component', () => {
    render(<MountainRetreat />);
    expect(screen.getByText('Mountain Retreat')).toBeInTheDocument();
  });
});
