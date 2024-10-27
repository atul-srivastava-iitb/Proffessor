import {
  RESEARCH_PROJECTS,
  RESEARCH_FACILITIES,
} from '../schema/research.sheman';

export function mutatedata() {}

mutatedata.genEmptyProject = function () {
  const obj: RESEARCH_PROJECTS = {
    duration: '',
    heading: '',
    place: '',
    role: '',
  };
  return obj;
};
mutatedata.genEmptyFacilty = function () {
  const obj: RESEARCH_FACILITIES = {
    content: '',
    heading: '',
    image: '',
  };
  return obj;
};

mutatedata.projectInputs = (
  project: RESEARCH_PROJECTS,
  name: string,
  value: string,
) => {
  if (name === 'project.heading') {
    project.heading = value;
  }
  if (name === 'project.place') {
    project.place = value;
  }
  if (name === 'project.role') {
    project.role = value;
  }
  if (name === 'project.duration') {
    project.duration = value;
  }
};

mutatedata.facilityInputs = (
  facility: RESEARCH_FACILITIES,
  name: string,
  value: string,
) => {
  if (name === 'facility.heading') {
    facility.heading = value;
  }
  if (name === 'facility.content') {
    facility.content = value;
  }
  if (name === 'facility.image') {
    facility.image = value;
  }
};

mutatedata.addnewproject = function (
  projects: RESEARCH_PROJECTS[],
  newItem: RESEARCH_PROJECTS,
  index: number,
  direction: 'up' | 'down',
) {
  const newIndex = direction === 'up' ? index : index + 1;
  const limit = Math.min(Math.max(0, newIndex), projects.length);
  projects.splice(limit, 0, newItem);
};
mutatedata.ediproject = function (
  projects: RESEARCH_PROJECTS[],
  newItem: RESEARCH_PROJECTS,
  index: number,
) {
  projects[index] = newItem;
};
mutatedata.delproject = function (
  projects: RESEARCH_PROJECTS[],
  index: number,
) {
  projects.splice(index, 1);
};

mutatedata.addnewfacility = function (
  facility: RESEARCH_FACILITIES[],
  newItem: RESEARCH_FACILITIES,
  index: number,
  direction: 'up' | 'down',
) {
  const newIndex = direction === 'up' ? index : index + 1;
  const limit = Math.min(Math.max(0, newIndex), facility.length);
  facility.splice(limit, 0, newItem);
};
mutatedata.editfacility = function (
  facility: RESEARCH_FACILITIES[],
  newItem: RESEARCH_FACILITIES,
  index: number,
) {
  facility[index] = newItem;
};
mutatedata.delfacility = function (
  facility: RESEARCH_FACILITIES[],
  index: number,
) {
  facility.splice(index, 1);
};
