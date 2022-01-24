import { render, fireEvent } from '@testing-library/react';
import { Input } from './input-container';
const props = {
  value: 'string',
  onChange: (value: string) => {},
  onBlur: () => {},
  placeholder: 'string',
};

describe('Article Details', () => {
  it('it should render successfully', () => {
    const { baseElement } = render(<Input {...props} />);

    expect(baseElement).toBeTruthy();
  });
  it('it should show value text', async () => {
    const { getByLabelText } = render(<Input {...props} />);
    const input: HTMLInputElement = getByLabelText('input') as HTMLInputElement;

    expect(input.value).toBe('string');
  });
  it('it should change value', async () => {
    const { getByLabelText, rerender } = render(<Input {...props} />);
    const input: HTMLInputElement = getByLabelText('input') as HTMLInputElement;

    expect(input.value).toBe('string');
    rerender(<Input {...props} value='changed' />);
    expect(input.value).toBe('changed');
  });
});
