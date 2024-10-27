import { PUBLICATION, ALLPUBLICATIONS } from '../schema/publication.schema';
import { ITEMENUMS } from './constants';

const importText = `
    import { PUBLICATION } from '@/code/features/publications/schema/publication.schema';
`;

const articleText = `

    export const articlesData: PUBLICATION[] = 

`;
const bookText = `


    export const book_chapters: PUBLICATION[] = 

`;
const conferenceText = `


    export const conferenceData: PUBLICATION[] = 

`;
const newsText = `
 

    export const news_articles: PUBLICATION[] = 

`;
const journalText = `


    export const journalsData: PUBLICATION[] = 

`;

export function getNewFileCode(
  allpublications: ALLPUBLICATIONS,
  active: string,
) {
  let array: PUBLICATION[] = [];
  let targetText = '';

  if (active === ITEMENUMS.JOURNALS) {
    array = allpublications.journals;
    targetText = journalText;
  }
  if (active === ITEMENUMS.ARTICLES) {
    array = allpublications.articles;
    targetText = articleText;
  }
  if (active === ITEMENUMS.BOOK) {
    array = allpublications.book;
    targetText = bookText;
  }
  if (active === ITEMENUMS.CONFERENCE) {
    array = allpublications.conference;
    targetText = conferenceText;
  }
  if (active === ITEMENUMS.NEWS) {
    array = allpublications.news;
    targetText = newsText;
  }
  const newArray = array.map((item) => {
    const newItem = { ...item };
    newItem.date = newItem.date.trim();
    newItem.finalText = newItem.finalText.trim();
    newItem.highlightedText = newItem.highlightedText.trim();
    newItem.initialText = newItem.initialText.trim();
    if (newItem.link) {
      newItem.link = newItem.link.trim();
    }
    return newItem;
  });

  const jsonString = JSON.stringify(newArray);
  const fileText = `
    ${importText}
    ${targetText}
    ${jsonString}
    ;
  `;
  return fileText;
}
