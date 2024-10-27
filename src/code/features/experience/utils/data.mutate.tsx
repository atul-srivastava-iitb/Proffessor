import { EXPERIENCE } from '../schema/experience.schema';

export function mutatedata() {}

mutatedata.genewEmptyExperience = function (): EXPERIENCE {
  const obj: EXPERIENCE = {
    place: '',
    position: '',
    time: '',
  };
  return obj;
};
mutatedata.addnew = function (
  array: EXPERIENCE[],
  newItem: EXPERIENCE,
  position: number,
  direction: 'up' | 'down',
) {
  const newIndex = direction === 'up' ? position : position + 1;
  const limit = Math.min(Math.max(0, newIndex), array.length);
  array.splice(limit, 0, newItem);
};

mutatedata.edit = function (
  array: EXPERIENCE[],
  newItem: EXPERIENCE,
  position: number,
) {
  array[position] = newItem;
};

mutatedata.del = function (array: EXPERIENCE[], position: number) {
  array.splice(position, 1);
};
