import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { WritableDraft } from 'immer';
import { experienceData } from '@/data/experience';
import { EXPERIENCE } from '../schema/experience.schema';
import { getNewFileCode } from '../utils/getFile';
import { mutatedata } from '../utils/data.mutate';

interface STATE {
  data: EXPERIENCE[];
  inputs: EXPERIENCE;
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
}
interface ACTIONS {
  pingInputs: (name: string, value: string) => void;
  formAction: (name: string) => void;
  editAction: (index: number, name: string) => void;
  getCode: (action: string) => void;
}

export type PRODUCTDFORMSTATE = WritableDraft<STATE & ACTIONS>;

export const useExperienceEdit = create<STATE & ACTIONS>()(
  immer((set, get) => ({
    /**
    ```````````````````````````````````````````````````````````
    `                                                         ` 
    `                FORM            
    `                                                         `
    ```````````````````````````````````````````````````````````
    */
    data: experienceData,
    inputs: mutatedata.genewEmptyExperience(),
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
    /**
     ```````````````````````````````````````````````````````````
    `                                                         ` 
    `                Form Edit                
    `                                                         `
    ```````````````````````````````````````````````````````````
    */
    pingInputs: (name, value) => {
      if (name === 'experience.time') {
        set((s) => {
          s.inputs.time = value;
        });
      }
      if (name === 'experience.place') {
        set((s) => {
          s.inputs.place = value;
        });
      }
      if (name === 'experience.position') {
        set((s) => {
          s.inputs.position = value;
        });
      }
    },
    getCode: (action) => {
      if (action === 'get') {
        const array = get().data;
        const newCode = getNewFileCode(array);
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
    formAction: (name) => {
      if (name === 'save') {
        const form = get().formType;
        set((s) => {
          if (form.isNew) {
            mutatedata.addnew(s.data, s.inputs, form.index, form.direction);
            return;
          } else {
            mutatedata.edit(s.data, s.inputs, form.index);
          }
        });
      }
      set((s) => {
        s.formType.show = false;
        s.inputs = mutatedata.genewEmptyExperience();
      });
    },
    editAction: (index, name) => {
      if (name === 'edit') {
        set((s) => {
          s.formType.index = index;
          s.formType.isNew = false;
          s.formType.show = true;
          const item = s.data;
          const targetItem = item[index];
          s.inputs.place = targetItem.place;
          s.inputs.position = targetItem.position;
          s.inputs.time = targetItem.time;
        });
      }
      if (name === 'addup') {
        set((s) => {
          s.formType.index = index;
          s.formType.isNew = true;
          s.formType.direction = 'up';
          s.formType.show = true;
        });
      }
      if (name === 'adddown') {
        set((s) => {
          s.formType.index = index;
          s.formType.isNew = true;
          s.formType.direction = 'down';
          s.formType.show = true;
        });
      }
      if (name === 'del') {
        set((s) => {
          mutatedata.del(s.data, index);
        });
      }
    },
  })),
);
