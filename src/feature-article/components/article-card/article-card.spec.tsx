import { render, screen } from '@testing-library/react';
import { Article } from '../../../utils';
import { ArticleCard } from './article-card';

const props: Article = {
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
};

describe('Article Card', () => {
  it('it should render successfully', () => {
    const { baseElement } = render(<ArticleCard {...props} />);

    expect(baseElement).toBeTruthy();
  });
  it('it should show author name', () => {
    const { queryByTestId } = render(<ArticleCard {...props} />);

    expect(queryByTestId('article-author')).toBeTruthy();
  });
  it("it shouldn't show author name", () => {
    const { queryByTestId } = render(<ArticleCard {...props} author='' />);

    expect(queryByTestId('article-author')).not.toBeTruthy();
  });
  it('it should show article title', () => {
    const { queryByTestId } = render(<ArticleCard {...props} />);

    expect(queryByTestId('article-title')).toBeTruthy();
  });
  it('it should show article description', () => {
    const { queryByTestId } = render(<ArticleCard {...props} />);

    expect(queryByTestId('article-description')).toBeTruthy();
  });
  it('it should show article source', () => {
    const { queryByTestId } = render(<ArticleCard {...props} />);

    expect(queryByTestId('article-source')).toBeTruthy();
  });
});
