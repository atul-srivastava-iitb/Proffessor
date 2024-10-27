import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { awardsdata } from '@/data/awards';
import { AWARDS } from '../interface/awards.interface';
import { mutate } from '../utils/mutate';
import { getcode } from '../utils/getcode';
import { MENUENUMS, MENUITEMS } from '../utils/constants';

interface STATE {
  data: AWARDS[];
  inputs: AWARDS;
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
  active: string;
}

interface ACTIONS {
  pingInputs: (name: string, value: string) => void;
  formAction: (name: string) => void;
  awardAction: (index: number, name: string) => void;
  getCode: (action: string) => void;
  changeActive: (action: string) => void;
}

export const useAwardEdit = create<STATE & ACTIONS>()(
  immer((set, get) => ({
    data: awardsdata,
    inputs: mutate.genEmptyAward(),
    formType: {
      isNew: false,
      index: 0,
      direction: 'down',
      show: false,
    },
    code: {
      fileText: '',
      show: false,
    },
    active: MENUITEMS[0],
    changeActive: (nv) => {
      set((s) => {
        s.active = nv;
      });
    },
    // done
    pingInputs: (name, value) => {
      set((s) => {
        mutate.awardInputs(s.inputs, name, value);
      });
    },
    // done
    formAction: (action) => {
      const form = get().formType;
      if (action === 'save') {
        set((s) => {
          if (form?.isNew) {
            mutate.addNewAward(s.data, s.inputs, form.index, form.direction);
          } else {
            mutate.editAward(s.data, s.inputs, form.index);
          }
        });
      }
      set((s) => {
        s.formType.show = false;
        s.inputs = mutate.genEmptyAward();
      });
    },
    awardAction: (index, name) => {
      if (name === 'edit') {
        set((s) => {
          s.formType.index = index;
          s.formType.isNew = false;
          s.formType.show = true;
          s.inputs = s.data[index];
        });
      }
      if (name === 'addup') {
        set((s) => {
          s.formType.index = index;
          s.formType.isNew = true;
          s.formType.show = true;
          s.formType.direction = 'up';
          s.inputs = mutate.genEmptyAward();
        });
      }
      if (name === 'adddown') {
        set((s) => {
          s.formType.index = index;
          s.formType.isNew = true;
          s.formType.show = true;
          s.formType.direction = 'down';
          s.inputs = mutate.genEmptyAward();
        });
      }
      if (name === 'del') {
        set((s) => {
          mutate.del(s.data, index);
        });
      }
    },
    getCode: (action) => {
      const active = get().active;
      if (action === 'get') {
        if (active === MENUENUMS.AWARDS) {
          const array = get().data;
          const newCode = getcode.awards(array);
          set((s) => {
            s.code.fileText = newCode;
            s.code.show = true;
          });
        }
      } else {
        set((s) => {
          s.code.fileText = '';
          s.code.show = false;
        });
      }
    },
  })),
);
