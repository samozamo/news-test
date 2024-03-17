interface TopHeadlinesData {
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

type HeadlineResponse =
  | {
      success: true;
      data: TopHeadlinesData;
    }
  | {
      success: false;
      message: string;
    };
