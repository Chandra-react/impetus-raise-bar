import { render, screen } from '@testing-library/react';
import { ArticleContainerProps } from '../../models';
import { ArticleContainer } from './article-conatiner';

const props: ArticleContainerProps = {
  articleData: [
    {
      _id: '61dab9daf6542f7daf610c17',
      author: 'Michael Chammas',
      title: 'Momirovski signs three-year deal with Sydney Roosters',
      description:
        'A grand final winner with Penrith, Paul Momirovski has turned down an opportunity with the Warriors to return to the club he made his debut with back in 2018.',
      url: 'https://www.smh.com.au/sport/nrl/momirovski-signs-three-year-deal-with-sydney-roosters-20211021-p5923t.html?ref=rss&utm_medium=rss&utm_source=rss_sport_nrl',
      image: '',
      category: 'sports',
      language: 'en',
      country: 'au',
      published_at: '2021-10-21T06:13:50.000Z',
      source: 'The Sydney Morning Herald',
    },
  ],
  categoryList: ['bussiness'],
  loading: false,
  search: '',
  selectedCategory: [],
  totalCount: 100,
  updatePagination: () => {},
  updateSearch: (search: string) => {},
  updateSelectedCategory: (category: string) => {},
  error: false,
  getSearchResult: () => {},
};

describe('Article Container', () => {
  it('it should render successfully', () => {
    const { baseElement } = render(<ArticleContainer {...props} />);

    expect(baseElement).toBeTruthy();
  });
  it('it should show loader', () => {
    const { queryByTestId } = render(<ArticleContainer {...props} loading={true} />);

    expect(queryByTestId('loader')).toBeTruthy();
  });
});
