import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { WritableDraft } from 'immer';
import { PUBLICATION, ALLPUBLICATIONS } from '../schema/publication.schema';
import publications from '@/data/publications';
import { ITEMS, ITEMENUMS } from '../utils/constants';
import { readdata } from '../utils/readdata';
import { mutate } from '../utils/mutate.state';
import { getNewFileCode } from '../utils/getCode';

interface STATE {
  data: ALLPUBLICATIONS;
  inputs: PUBLICATION;
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
  editAction: (index: number, name: string) => void;
  getCode: (action: string) => void;
  getActiveData: (allData: ALLPUBLICATIONS) => PUBLICATION[];
  changeActive: (newItem: string) => void;
}

export type STATEEDIT = WritableDraft<STATE & ACTIONS>;

export const usePublicationEdit = create<STATE & ACTIONS>()(
  immer((set, get) => ({
    /**
    ```````````````````````````````````````````````````````````
    `                                                         ` 
    `                FORM            
    `                                                         `
    ```````````````````````````````````````````````````````````
    */
    data: publications,
    inputs: readdata.genEmptyPublication(),
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
    active: ITEMS[0],
    /**
     ```````````````````````````````````````````````````````````
    `                                                         ` 
    `                Form Edit                
    `                                                         `
    ```````````````````````````````````````````````````````````
    */
    pingInputs: (name, value) => {
      set((s) => {
        mutate.inputs(s.inputs, name, value);
      });
    },
    getCode: (action) => {
      if (action === 'get') {
        const alldata = get().data;
        const active = get().active;
        const newCode = getNewFileCode(alldata, active);
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
            mutate.addNew(
              s.data,
              s.inputs,
              s.active,
              form.index,
              form.direction,
            );
          } else {
            mutate.edit(s.data, s.inputs, s.active, form.index);
          }
        });
      }
      set((s) => {
        s.formType.show = false;
        s.inputs = readdata.genEmptyPublication();
      });
    },
    editAction: (index, name) => {
      const allPublications = get().data;
      const active = get().active;
      if (name === 'edit') {
        set((s) => {
          s.formType.index = index;
          s.formType.isNew = false;
          s.formType.show = true;

          const targetPublication = readdata.gettargetpublication(
            allPublications,
            active,
            index,
          );
          s.inputs.date = targetPublication.date || '';
          s.inputs.finalText = targetPublication.finalText || '';
          s.inputs.highlightedText = targetPublication.highlightedText || '';
          s.inputs.initialText = targetPublication.initialText || '';
          s.inputs.link = targetPublication.link || '';
        });
      }
      if (name === 'addup') {
        set((s) => {
          s.formType.index = index;
          s.formType.isNew = true;
          s.formType.direction = 'up';
          s.formType.show = true;
          s.inputs = readdata.genEmptyPublication();
        });
      }
      if (name === 'adddown') {
        set((s) => {
          s.formType.index = index;
          s.formType.isNew = true;
          s.formType.direction = 'down';
          s.formType.show = true;
          s.inputs = readdata.genEmptyPublication();
        });
      }
      if (name === 'del') {
        // deletes the target publication
        set((s) => {
          mutate.del(s.data, active, index);
        });
      }
    },
    getActiveData: (allData) => {
      const active = get().active;
      if (active === ITEMENUMS.JOURNALS) {
        return allData.journals;
      }
      if (active === ITEMENUMS.ARTICLES) {
        return allData.articles;
      }
      if (active === ITEMENUMS.BOOK) {
        return allData.book;
      }
      if (active === ITEMENUMS.CONFERENCE) {
        return allData.conference;
      }
      if (active === ITEMENUMS.NEWS) {
        return allData.news;
      }
      return [];
    },
    changeActive: (newItem: string) => {
      set((s) => {
        if (ITEMS.includes(newItem)) {
          s.active = newItem;
        }
      });
    },
  })),
);
