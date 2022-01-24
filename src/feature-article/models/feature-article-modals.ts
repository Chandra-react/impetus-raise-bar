import { Article } from '../../utils';

export interface CategoryListProps {
  categoryList: string[];
  selectedCategory: string[];
  updateSelectedCategory: (category: string) => void;
  search: string;
  updateSearch: (value: string) => void;
  getSearchResult: () => void;
}

export interface ArticleContainerProps extends CategoryListProps {
  articleData: Article[];
  totalCount: number;
  loading: boolean;
  updatePagination: () => void;
  error: boolean;
  navigate?: (path: string) => void;
}

export interface ArticleArgs {
  language?: string;
  limit: number;
  page: number;
  category?: string;
  search?: string;
}
