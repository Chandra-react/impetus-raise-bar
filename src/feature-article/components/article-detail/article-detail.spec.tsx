import { render, screen } from '@testing-library/react';
import { ArticleDetail, ArticleDetailProps } from './article-detail';

const props: ArticleDetailProps = {
  article: {
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
  relatedArticles: [],
  navigate: (path: string) => {},
  error: false,
  onBackClick: () => {},
};

describe('Article Details', () => {
  it('it should render successfully', () => {
    const { baseElement } = render(<ArticleDetail {...props} />);

    expect(baseElement).toBeTruthy();
  });
  it('it should render error component', () => {
    const { queryByTestId } = render(<ArticleDetail {...props} error={true} />);

    expect(queryByTestId('error-data')).toBeTruthy();
  });
  it('it should render no-data component', () => {
    const { queryByTestId } = render(<ArticleDetail {...props} article={null} />);

    expect(queryByTestId('no-data')).toBeTruthy();
  });
  it('it should show article description', () => {
    const { queryByTestId } = render(<ArticleDetail {...props} />);

    expect(queryByTestId('article-description')).toBeTruthy();
  });
});
