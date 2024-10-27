import { articlesData } from './articles';
import { book_chapters } from './bookChapters';
import { conferenceData } from './conference';
import { journalsData } from './journals';
import { news_articles } from './newsArticles';

const publications = {
  articles: articlesData,
  book: book_chapters,
  conference: conferenceData,
  journals: journalsData,
  news: news_articles,
};
export default publications;

export {
  articlesData,
  book_chapters,
  conferenceData,
  journalsData,
  news_articles,
};
