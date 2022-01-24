import { render, screen } from '@testing-library/react';
import { Loader } from './loader';

describe('Loader', () => {
  it('it should render successfully', () => {
    const { baseElement } = render(<Loader loaderStyle={''} />);

    expect(baseElement).toBeTruthy();
  });
});
