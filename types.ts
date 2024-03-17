interface TopHeadlinesResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

interface Article {
  title: string;
  author?: string;
  source: Source;
  publishedAt: string;
  url: string;
}

interface Source {
  id?: string;
  name: string;
}
