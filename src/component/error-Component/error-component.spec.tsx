import { render, screen } from '@testing-library/react';
import { ErrorComponent } from '..';

describe('Error component', () => {
  it('it should render successfully', () => {
    const { baseElement } = render(<ErrorComponent />);

    expect(baseElement).toBeTruthy();
  });
  it('it should show headline successfully', () => {
    const { queryByText } = render(<ErrorComponent headline={'headline'} />);

    expect(queryByText('headline')).toBeTruthy();
  });
  it('it should show tagline successfully', () => {
    const { queryByText } = render(<ErrorComponent tagline={'tagline'} />);

    expect(queryByText('tagline')).toBeTruthy();
  });
});
