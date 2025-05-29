import { render, screen } from '@testing-library/react';
import { UnderwaterOasis } from '../vr-addons/underwater-oasis/underwater_oasis';

describe('UnderwaterOasis', () => {
  test('renders UnderwaterOasis component', () => {
    render(<UnderwaterOasis />);
    expect(screen.getByText('Underwater Oasis')).toBeInTheDocument();
  });
});
