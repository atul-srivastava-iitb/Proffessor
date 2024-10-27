export function mutate() {}
import { STUDENTS, STUDENTSALL } from '../interface/student.interface';
import { Menu1Enum, MENU1, MENU2, Menu2Enum } from './constants';

mutate.genEmptyStudent = function () {
  const obj: STUDENTS = {
    image: '',
    name: '',
    texta: '',
    textb: '',
    textc: '',
    link: '',
  };
  return obj;
};

mutate.studentInputs = function (
  inputs: STUDENTS,
  name: string,
  value: string,
) {
  if (name === 'student.image') inputs.image = value;
  if (name === 'student.link') inputs.link = value;
  if (name === 'student.name') inputs.name = value;
  if (name === 'student.texta') inputs.texta = value;
  if (name === 'student.textb') inputs.textb = value;
  if (name === 'student.textc') inputs.textc = value;
};

mutate.addNewStudent = function (
  array: STUDENTS[],
  newStudent: STUDENTS,
  index: number,
  direction: 'up' | 'down',
) {
  if (!array) return;
  const newIndex = direction === 'up' ? index : index + 1;
  const limit = Math.min(Math.max(0, newIndex), array.length);
  array.splice(limit, 0, newStudent);
};
mutate.editStudent = function (
  array: STUDENTS[],
  newStudent: STUDENTS,
  index: number,
) {
  if (!array) return;
  array[index] = newStudent;
};

mutate.delStudent = function (array: STUDENTS[], index: number) {
  if (!array) return;
  array.splice(index, 1);
};

mutate.getTargetStudent = function (
  all: STUDENTSALL,
  active1: string,
  active2: string,
  index: number,
) {
  const array = mutate.getTargetArray(all, active1, active2);
  return array[index];
};
mutate.getTargetArray = function (
  all: STUDENTSALL,
  active1: string,
  active2: string,
) {
  if (active1 === Menu1Enum.DUAL) {
    if (active2 === Menu2Enum.CURRENT) {
      return all.mtechCurrent;
    }
    if (active2 === Menu2Enum.ALUMNI) {
      return all.mtechAlumni;
    }
  }
  if (active1 === Menu1Enum.PHD) {
    if (active2 === Menu2Enum.CURRENT) {
      return all.phdCurrent;
    }
    if (active2 === Menu2Enum.ALUMNI) {
      return all.phdAlumni;
    }
  }
  if (active1 === Menu1Enum.POST) {
    if (active2 === Menu2Enum.CURRENT) {
      return all.postCurrent;
    }
    if (active2 === Menu2Enum.ALUMNI) {
      return all.postAlumni;
    }
  }
  return [];
};
