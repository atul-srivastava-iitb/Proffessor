const importText = `
    import { GALLERY } from '@/code/features/gallery/interface/gallery.interface';


`;
const labText = `
    export const lab_images: GALLERY = 
    
`;

const partyText = `
    export const party_images: GALLERY =
    
`;
const recoginitionText = `
    export const recoginition_images: GALLERY = 
    
`;
const researchText = `
    export const research_images: GALLERY = 
    
`;

export function getNewFileCode(array: string[], active: string) {
  const jsonstring = JSON.stringify(array);
  if (active === 'lab') {
    const fileText = `
        ${importText}
        ${labText}
        ${jsonstring};
    `;
    return fileText;
  }
  if (active === 'party') {
    const fileText = `
        ${importText}
        ${partyText}
        ${jsonstring};
    `;
    return fileText;
  }
  if (active === 'recoginition') {
    const fileText = `
        ${importText}
        ${recoginitionText}
        ${jsonstring};
    `;
    return fileText;
  }
  if (active === 'research') {
    const fileText = `
        ${importText}
        ${researchText}
        ${jsonstring};
    `;
    return fileText;
  }
  return '';
}
