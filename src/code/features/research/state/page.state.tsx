import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { WritableDraft } from 'immer';
import researchData from '@/data/reasearch';
import {
  RESEARCH_PROJECTS,
  RESEARCH_FACILITIES,
  RESEARCH_ALL,
} from '../schema/research.sheman';
import { mutatedata } from '../utils/mutate.data';
import { MENUITEM_ENUM, MENU_ITEMS } from '../utils/constants';
import { getNewFileCode } from '../utils/getcode';

interface STATE {
  data: RESEARCH_ALL;
  inputs: {
    project: RESEARCH_PROJECTS;
    facility: RESEARCH_FACILITIES;
  };
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
  setActive: (i: string) => void;
  pingInputs: (name: string, value: string) => void;
  formActions: (action: string) => void;
  itemAction: (index: number, name: string) => void;
  getCode: (action: string) => void;
}

export type STATEEDIT = WritableDraft<STATE & ACTIONS>;

export const useResearchEdit = create<STATE & ACTIONS>()(
  immer((set, get) => ({
    data: researchData,
    inputs: {
      project: mutatedata.genEmptyProject(),
      facility: mutatedata.genEmptyFacilty(),
    },
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
    active: MENU_ITEMS[0],
    pingInputs: (name, value) => {
      // inputs done
      const namesplit = name.split('.');
      set((s) => {
        if (namesplit[0] === 'project') {
          mutatedata.projectInputs(s.inputs.project, name, value);
        }
        if (namesplit[0] === 'facility') {
          mutatedata.facilityInputs(s.inputs.facility, name, value);
        }
      });
    },
    setActive: (n) => {
      set((s) => {
        s.active = n;
      });
    },
    getCode: (action) => {
      const data = get().data;
      const active = get().active;
      if (action === 'get') {
        if (active === MENUITEM_ENUM.PROJECT) {
          const newCode = getNewFileCode.project(data.projects);
          set((s) => {
            s.code.fileText = newCode;
            s.code.show = true;
          });
          return;
        }
        if (active === MENUITEM_ENUM.RESEARCH_FACILITIES) {
          const newCode = getNewFileCode.facility(data.facilities);
          set((s) => {
            s.code.fileText = newCode;
            s.code.show = true;
          });
          return;
        }
      } else {
        set((s) => {
          s.code.fileText = '';
          s.code.show = false;
        });
      }
    },
    formActions: (action) => {
      // form actions
      const form = get().formType;
      set((s) => {
        if (action === 'project.save') {
          if (form.isNew) {
            mutatedata.addnewproject(
              s.data.projects,
              s.inputs.project,
              form.index,
              form.direction,
            );
          } else {
            mutatedata.ediproject(
              s.data.projects,
              s.inputs.project,
              form.index,
            );
          }
        }
        if (action === 'facility.save') {
          if (form.isNew) {
            mutatedata.addnewfacility(
              s.data.facilities,
              s.inputs.facility,
              form.index,
              form.direction,
            );
          } else {
            mutatedata.editfacility(
              s.data.facilities,
              s.inputs.facility,
              form.index,
            );
          }
        }
      });
      set((s) => {
        s.formType.show = false;
        s.inputs.facility = mutatedata.genEmptyFacilty();
        s.inputs.project = mutatedata.genEmptyProject();
      });
    },
    // create environment for form
    itemAction: (index, name) => {
      const active = get().active;
      const research = get().data;
      if (name === 'edit') {
        set((s) => {
          s.formType.index = index;
          s.formType.isNew = false;
          s.formType.show = true;
          // fill the inputs
          if (active === MENUITEM_ENUM.PROJECT) {
            s.inputs.project = research.projects[index];
          }
          if (active === MENUITEM_ENUM.RESEARCH_FACILITIES) {
            s.inputs.facility = research.facilities[index];
          }
        });
      }
      if (name === 'addup') {
        set((s) => {
          s.formType.index = index;
          s.formType.isNew = true;
          s.formType.direction = 'up';
          s.formType.show = true;
          s.inputs.facility = mutatedata.genEmptyFacilty();
          s.inputs.project = mutatedata.genEmptyProject();
        });
      }
      if (name === 'adddown') {
        set((s) => {
          s.formType.index = index;
          s.formType.isNew = true;
          s.formType.direction = 'down';
          s.formType.show = true;
          s.inputs.facility = mutatedata.genEmptyFacilty();
          s.inputs.project = mutatedata.genEmptyProject();
        });
      }
      if (name === 'del') {
        const active = get().active;
        set((s) => {
          if (active === MENUITEM_ENUM.PROJECT) {
            mutatedata.delproject(s.data.projects, index);
          }
          if (active === MENUITEM_ENUM.RESEARCH_FACILITIES) {
            mutatedata.delfacility(s.data.facilities, index);
          }
        });
      }
    },
  })),
);
