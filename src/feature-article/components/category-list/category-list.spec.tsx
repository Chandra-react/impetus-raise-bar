import { render, screen } from '@testing-library/react';
import { CategoryListProps } from '../../models';
import { CategoryList } from './category-list';

const props: CategoryListProps = {
  categoryList: ['bussiness'],
  search: '',
  selectedCategory: [],
  updateSearch: (search: string) => {},
  updateSelectedCategory: (category: string) => {},
  getSearchResult: () => {},
};

describe('Category List', () => {
  it('it should render successfully', () => {
    const { baseElement } = render(<CategoryList {...props} />);

    expect(baseElement).toBeTruthy();
  });
  it('it should render category list', () => {
    const { queryByText } = render(<CategoryList {...props} />);

    expect(queryByText('bussiness')).toBeTruthy();
  });
});
