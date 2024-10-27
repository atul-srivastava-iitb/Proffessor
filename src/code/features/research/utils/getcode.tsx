import {
  RESEARCH_FACILITIES,
  RESEARCH_PROJECTS,
} from '../schema/research.sheman';

const facilityText = `
    import { RESEARCH_FACILITIES } from '@/code/features/research/schema/research.sheman';

    export const researchFacilities: RESEARCH_FACILITIES[] = 

`;

const projectText = `
    import { RESEARCH_PROJECTS } from '@/code/features/research/schema/research.sheman';
    export const researchProjects: RESEARCH_PROJECTS[] = 
`;

export function getNewFileCode() {}

getNewFileCode.project = function (projects: RESEARCH_PROJECTS[]) {
  const trim = projects.map((item) => {
    const newItem = { ...item };
    newItem.duration = newItem.duration.trim();
    newItem.heading = newItem.heading.trim();
    newItem.place = newItem.place.trim();
    newItem.role = newItem.role.trim();
    return newItem;
  });
  const jsonString = JSON.stringify(trim);
  const fileText = `
        ${projectText}
        ${jsonString}
    ;
    `;
  return fileText;
};

getNewFileCode.facility = function (projects: RESEARCH_FACILITIES[]) {
  const trim = projects.map((item) => {
    const newItem = item;
    newItem.heading.trim();
    newItem.content.trim();
    newItem.image.trim();
    return newItem;
  });

  const jsonString = JSON.stringify(trim);
  const fileText = `
          ${facilityText}
          ${jsonString}
      ;
      `;
  return fileText;
};
