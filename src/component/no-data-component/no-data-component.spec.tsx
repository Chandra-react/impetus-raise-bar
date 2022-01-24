import { render, screen } from '@testing-library/react';
import { NoDataComponent } from '..';

describe('no-data component', () => {
  it('it should render successfully', () => {
    const { baseElement } = render(<NoDataComponent />);

    expect(baseElement).toBeTruthy();
  });
  it('it should show headline successfully', () => {
    const { queryByText } = render(<NoDataComponent headline={'headline'} />);

    expect(queryByText('headline')).toBeTruthy();
  });
  it('it should show tagline successfully', () => {
    const { queryByText } = render(<NoDataComponent tagline={'tagline'} />);

    expect(queryByText('tagline')).toBeTruthy();
  });
});
