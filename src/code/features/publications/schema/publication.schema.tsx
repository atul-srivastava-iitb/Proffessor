export interface PUBLICATION {
  date: string;
  initialText: string;
  highlightedText: string;
  finalText: string;
  link?: string;
}

export interface ALLPUBLICATIONS {
  articles: PUBLICATION[];
  book: PUBLICATION[];
  conference: PUBLICATION[];
  news: PUBLICATION[];
  journals: PUBLICATION[];
}
