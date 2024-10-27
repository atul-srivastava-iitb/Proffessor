import { STUDENTS } from '../interface/student.interface';

const importText = `
    import { STUDENTS } from '@/code/features/students/interface/student.interface';
`;

const mtechcurrentText = `
    export const mtech_current: STUDENTS[] = 
`;
const mtechalumniText = `
    export const mtech_alumni: STUDENTS[] = 
`;

const phdcurrentText = `
    export const phd_current: STUDENTS[] = 
`;

const phdalumniText = `
    export const phd_alumni: STUDENTS[] = 
`;

const postcurrentText = `
    export const postd_current: STUDENTS[] = 
`;

const postalumniText = `
    export const postd_alumni: STUDENTS[] = 
`;

export function getNewFileCode() {}

const trimdata = (array: STUDENTS[]) => {
  const trimAlumni = array.map((item) => {
    const newItem = { ...item };
    newItem.image = newItem.image.trim();
    newItem.name = newItem.name.trim();
    newItem.texta = newItem.texta.trim();
    newItem.textb = newItem.textb.trim();
    newItem.textc = newItem.textc.trim();
    if (newItem.link) newItem.link = newItem.link.trim();
    return newItem;
  });
  return trimAlumni;
};
getNewFileCode.mtech = function (alumni: STUDENTS[], current: STUDENTS[]) {
  const alumnitrim = trimdata(alumni);
  const currentitrim = trimdata(current);

  const alumniString = JSON.stringify(alumnitrim);
  const currentString = JSON.stringify(currentitrim);

  const fileText = `
        ${importText}
        ${mtechcurrentText}
        ${currentString}
        ;
        ${mtechalumniText}
        ${alumniString}
        ;
  `;
  return fileText;
};
getNewFileCode.phd = function (alumni: STUDENTS[], current: STUDENTS[]) {
  const alumnitrim = trimdata(alumni);
  const currentitrim = trimdata(current);

  const alumniString = JSON.stringify(alumnitrim);
  const currentString = JSON.stringify(currentitrim);

  const fileText = `
          ${importText}
          ${phdcurrentText}
          ${currentString}
          ;
          ${phdalumniText}
          ${alumniString}
          ;
    `;
  return fileText;
};

getNewFileCode.post = function (alumni: STUDENTS[], current: STUDENTS[]) {
  const alumnitrim = trimdata(alumni);
  const currentitrim = trimdata(current);

  const alumniString = JSON.stringify(alumnitrim);
  const currentString = JSON.stringify(currentitrim);

  const fileText = `
            ${importText}
            ${postcurrentText}
            ${currentString}
            ;
            ${postalumniText}
            ${alumniString}
            ;
      `;
  return fileText;
};
