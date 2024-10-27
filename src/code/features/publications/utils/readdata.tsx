export function readdata() {}
import { PUBLICATION, ALLPUBLICATIONS } from '../schema/publication.schema';
import { ITEMS } from './constants';

readdata.genEmptyPublication = function (active?: string): PUBLICATION {
  const obj: PUBLICATION = {
    date: '',
    finalText: '',
    highlightedText: '',
    initialText: '',
    link: '',
  };
  return obj;
};

readdata.gettargetpublication = function (
  allpublications: ALLPUBLICATIONS,
  active: string,
  index: number,
): PUBLICATION {
  if (active === ITEMS[0]) {
    return allpublications.journals[index];
  }
  if (active === ITEMS[1]) {
    return allpublications.articles[index];
  }
  if (active === ITEMS[2]) {
    return allpublications.book[index];
  }
  if (active === ITEMS[3]) {
    return allpublications.conference[index];
  }
  if (active === ITEMS[4]) {
    return allpublications.news[index];
  }
  const emptyobj = readdata.genEmptyPublication();
  return emptyobj;
};
