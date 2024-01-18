export interface Article {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: Array<any>;
  events: Array<any>;
}

export interface ArticleProps {
  article: Article;
}

export interface ArticleDetailProps {
  id: number;
}
