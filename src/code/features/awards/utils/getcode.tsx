import { AWARDS } from '../interface/awards.interface';
export function getcode() {}
const permaText = `
    
    import { AWARDS } from '@/code/features/awards/interface/awards.interface';

    export const awardsdata: AWARDS[] =

`;

getcode.awards = function (data: AWARDS[]) {
  const trimData = data.map((item) => {
    const newItem: AWARDS = { ...item };
    newItem.date = newItem.date.trim();
    newItem.description = newItem.description.trim();
    newItem.title = newItem.title.trim();
    return newItem;
  });
  const jsonstring = JSON.stringify(trimData);
  const fileText = `
        ${permaText} 
        ${jsonstring};
    `;
  return fileText;
};
