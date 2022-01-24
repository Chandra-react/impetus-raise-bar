import { render, screen } from '@testing-library/react';
import { PageHeader } from './page-header';
const props = {
  onBackClick: () => {},
  title: 'Header',
};

describe('Article Details', () => {
  it('it should render successfully', () => {
    const { baseElement } = render(<PageHeader {...props} />);

    expect(baseElement).toBeTruthy();
  });
  it('it should render header name', () => {
    const { queryByText } = render(<PageHeader {...props} />);

    expect(queryByText('Header')).toBeTruthy();
  });
});
