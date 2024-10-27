import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import gallery, { galleryLocations } from '@/data/gallery';
import { GALLERY_ALL, GALLERY } from '../interface/gallery.interface';
import { getNewFileCode } from '../utils/getcode';
import { GALLERY_MENU_ENUMNS, GALLERY_MENU_ITEMS } from '../utils/constants';

interface STATE {
  data: GALLERY_ALL;

  formType: {
    show: boolean;
  };
  inputs: GALLERY;
  code: {
    fileText: string;
    showCode: boolean;
  };
  active: string | 'lab' | 'party' | 'recoginition' | 'research';
}
interface ACTIONS {
  pingInputs?: (name: string, value: string) => void;
  formAction: (name: string) => void;
  editAction: (name: string) => void;
  getCode: (action: string[] | string) => void;
  getGallery: (type: string) => GALLERY;
  getLocation: (type: string) => string;
  changeActive: (na: string) => void;
}

export const useGalleryEdit = create<STATE & ACTIONS>()(
  immer((set, get) => ({
    data: gallery,
    inputs: [],
    active: GALLERY_MENU_ITEMS[0],
    formType: {
      show: false,
    },
    code: {
      fileText: '',
      showCode: false,
    },
    changeActive: (na) => {
      set((s) => {
        s.active = na;
      });
    },
    pingInputs: (name, value) => {
      if (name === 'gallery.name') {
      }
    },
    getGallery: (type) => {
      const data = get().data;
      if (type === GALLERY_MENU_ENUMNS.LAB) {
        return data.lab;
      }
      if (type === 'home') {
        return data.home;
      }
      if (type === 'recoginition') {
        return data.recoginition;
      }
      if (type === GALLERY_MENU_ENUMNS.PARTY) {
        return data.party;
      }
      if (type === GALLERY_MENU_ENUMNS.RESEARCH) {
        return data.research;
      }
      return data.lab;
    },
    getLocation: (type) => {
      if (type === GALLERY_MENU_ENUMNS.LAB) {
        return galleryLocations.lab;
      }
      if (type === GALLERY_MENU_ENUMNS.PARTY) {
        return galleryLocations.party;
      }
      if (type === GALLERY_MENU_ENUMNS.RESEARCH) {
        return galleryLocations.research;
      }
      if (type === 'home') {
        return galleryLocations.home;
      }
      if (type === 'recoginition') {
        return galleryLocations.recoginition;
      }
      return galleryLocations.lab;
    },
    editAction: (type) => {
      if (type === '') {
        set((s) => {
          s.formType.show = false;
        });
      } else {
        set((s) => {
          s.formType.show = true;
        });
      }
    },
    formAction: (action) => {
      set((s) => {
        s.formType.show = false;
        s.inputs = [];
      });
    },
    getCode: (names) => {
      if (names === '') {
        set((s) => {
          s.code.fileText = '';
          s.code.showCode = false;
          s.formType.show = false;
        });
      }
      if (!Array.isArray(names)) return;
      // set the code thingi
      const active = get().active;
      const fileText = getNewFileCode(names, active);
      set((s) => {
        s.code.fileText = fileText;
        s.code.showCode = true;
        s.formType.show = false;
      });
    },
  })),
);
