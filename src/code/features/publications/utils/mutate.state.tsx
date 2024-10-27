import { PUBLICATION, ALLPUBLICATIONS } from '../schema/publication.schema';
import { ITEMS, ITEMENUMS } from './constants';
export function mutate() {}

mutate.inputs = function (item: PUBLICATION, name: string, value: string) {
  if (name === 'publication.date') {
    item.date = value;
  }
  if (name === 'publication.initialtext') {
    item.initialText = value;
  }

  if (name === 'publication.highlightedtext') {
    item.highlightedText = value;
  }
  if (name === 'publication.finaltext') {
    item.finalText = value;
  }
  if (name === 'publication.link') {
    item.link = value;
  }
};

mutate.addNew = function (
  allPublications: ALLPUBLICATIONS,
  newItem: PUBLICATION,
  active: string,
  index: number,
  direction: 'up' | 'down',
) {
  const targetSection = mutate.getTargetArray(allPublications, active);
  const newIndex = direction === 'up' ? index : index + 1;
  const limit = Math.min(Math.max(0, newIndex), targetSection.length);
  targetSection.splice(limit, 0, newItem);
};

mutate.edit = function (
  allPublications: ALLPUBLICATIONS,
  newItem: PUBLICATION,
  active: string,
  index: number,
) {
  const targetSection = mutate.getTargetArray(allPublications, active);
  targetSection[index] = newItem;
};

mutate.del = function (
  allPublications: ALLPUBLICATIONS,
  active: string,
  index: number,
) {
  let targetSection: PUBLICATION[] = [];
  targetSection = mutate.getTargetArray(allPublications, active);
  targetSection.splice(index, 1);
};

mutate.getTargetArray = function (
  allPublications: ALLPUBLICATIONS,
  active: string,
): PUBLICATION[] {
  // deletes
  let targetSection: PUBLICATION[] = [];
  if (active === ITEMENUMS.JOURNALS) {
    targetSection = allPublications.journals;
  }
  if (active === ITEMENUMS.ARTICLES) {
    targetSection = allPublications.articles;
  }
  if (active === ITEMENUMS.BOOK) {
    targetSection = allPublications.book;
  }
  if (active === ITEMENUMS.CONFERENCE) {
    targetSection = allPublications.conference;
  }
  if (active === ITEMENUMS.NEWS) {
    targetSection = allPublications.news;
  }
  return targetSection;
};
