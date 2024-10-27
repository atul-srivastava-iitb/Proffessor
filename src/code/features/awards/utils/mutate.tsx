import { AWARDS } from '../interface/awards.interface';

export function mutate() {}
mutate.genEmptyAward = function () {
  const obj: AWARDS = {
    date: '',
    description: '',
    title: '',
  };
  return obj;
};

mutate.awardInputs = function (inputs: AWARDS, name: string, value: string) {
  if (name === 'award.date') inputs.date = value;
  if (name === 'award.description') inputs.description = value;
  if (name === 'award.title') inputs.title = value;
};

mutate.addNewAward = function (
  array: AWARDS[],
  newAward: AWARDS,
  index: number,
  direction: 'up' | 'down',
) {
  if (!array) return;
  const newIndex = direction === 'up' ? index : index + 1;
  const limit = Math.min(Math.max(0, newIndex), array.length);
  array.splice(limit, 0, newAward);
};

mutate.editAward = function (array: AWARDS[], newAward: AWARDS, index: number) {
  if (!array) return;
  array[index] = newAward;
};

mutate.del = function (array: AWARDS[], index: number) {
  if (!array) return;
  array.splice(index, 1);
};
