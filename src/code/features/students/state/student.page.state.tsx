import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { WritableDraft } from 'immer';
import { STUDENTS, STUDENTSALL } from '../interface/student.interface';
import allStudents from '@/data/students';
import { mutate } from '../utils/mutate.data';
import { Menu1Enum, MENU1, MENU2, Menu2Enum } from '../utils/constants';
import { getNewFileCode } from '../utils/getCode';

interface STATE {
  data: STUDENTSALL;
  inputs: STUDENTS;
  formType: {
    isNew: boolean;
    index: number;
    direction: 'up' | 'down';
    show: boolean;
  };
  code: {
    fileText: string;
    show: boolean;
  };
  active1: string;
  active2: string;
}

interface ACTIONS {
  pingInputs: (name: string, value: string) => void;
  formAction?: (name: string) => void;
  studentItemAction?: (index: number, name: string) => void;
  getCode: (action: string) => void;
  changeActive: (menu1: string) => void;
  itemAction: (index: number, name: string) => void;
}

export const useStudentEdit = create<STATE & ACTIONS>()(
  immer((set, get) => ({
    data: allStudents,
    inputs: mutate.genEmptyStudent(),
    formType: {
      isNew: false,
      index: 0,
      direction: 'down',
      show: false,
    },
    active1: MENU1[0],
    active2: MENU2[0],
    code: {
      fileText: '',
      show: false,
    },
    pingInputs: (name, value) => {
      set((s) => {
        mutate.studentInputs(s.inputs, name, value);
      });
    },
    changeActive: (link) => {
      set((s) => {
        if (MENU1.includes(link)) {
          s.active1 = link;
        } else if (MENU2.includes(link)) {
          s.active2 = link;
        }
      });
    },
    getCode: (action) => {
      if (action === 'get') {
        const alldata = get().data;
        const active = get().active1;
        //
        let newCode: string = '';
        if (active === Menu1Enum.DUAL) {
          newCode = getNewFileCode.mtech(
            alldata.mtechAlumni,
            alldata.mtechCurrent,
          );
        }
        if (active === Menu1Enum.PHD) {
          newCode = getNewFileCode.phd(alldata.phdAlumni, alldata.phdCurrent);
        }
        if (active === Menu1Enum.POST) {
          newCode = getNewFileCode.post(
            alldata.postAlumni,
            alldata.postCurrent,
          );
        }
        set((s) => {
          s.code.fileText = newCode;
          s.code.show = true;
        });
      } else {
        set((s) => {
          s.code.fileText = '';
          s.code.show = false;
        });
      }
    },
    formAction: (action) => {
      const form = get().formType;
      if (action === 'save') {
        set((s) => {
          const targetArray = mutate.getTargetArray(
            s.data,
            s.active1,
            s.active2,
          );
          if (form.isNew) {
            mutate.addNewStudent(
              targetArray,
              s.inputs,
              form.index,
              form.direction,
            );
          } else {
            mutate.editStudent(targetArray, s.inputs, form.index);
          }
        });
      }
      set((s) => {
        s.formType.show = false;
        s.inputs = mutate.genEmptyStudent();
      });
    },
    itemAction: (index, name) => {
      const active1 = get().active1;
      const active2 = get().active2;
      set((s) => {
        if (name === 'addup') {
          s.formType.index = index;
          s.formType.isNew = true;
          s.formType.direction = 'up';
          s.formType.show = true;
          s.inputs = mutate.genEmptyStudent();
        }
        if (name === 'adddown') {
          s.formType.index = index;
          s.formType.isNew = true;
          s.formType.direction = 'down';
          s.formType.show = true;
          s.inputs = mutate.genEmptyStudent();
        }
        if (name === 'edit') {
          s.formType.index = index;
          s.formType.isNew = false;
          s.formType.show = true;
          s.inputs = mutate.getTargetStudent(s.data, active1, active2, index);
        }
        if (name === 'del') {
          const array = mutate.getTargetArray(s.data, active1, active2);
          mutate.delStudent(array, index);
        }
      });
    },
  })),
);
