import { EXPERIENCE } from '../schema/experience.schema';

const permaText = `

    import { EXPERIENCE } from '@/code/features/experience/schema/experience.schema';

    export const experienceData: EXPERIENCE[] = 

`;
export function getNewFileCode(array: EXPERIENCE[]) {
  const trim = array.map((item) => {
    const newItem: EXPERIENCE = { ...item };
    newItem.place = newItem.place.trim();
    newItem.position = newItem.position.trim();
    newItem.time = newItem.time.trim();
    return newItem;
  });
  const jsonstring = JSON.stringify(trim);
  const fileText = `
  ${permaText}  
  ${jsonstring};
  `;

  return fileText;
}
