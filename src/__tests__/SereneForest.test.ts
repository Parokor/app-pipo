import { render, screen } from '@testing-library/react';
import { SereneForest } from '../vr-addons/serene-forest/serene_forest';

describe('SereneForest', () => {
  test('renders SereneForest component', () => {
    render(<SereneForest />);
    expect(screen.getByText('Serene Forest')).toBeInTheDocument();
  });
});
