import { lab_images } from './lab_images';
import { party_images } from './party_images';
import { recoginition_images } from './recoginition_images';
import { research_images } from './research_images';
import { home_images } from './home_images';

const gallery = {
  lab: lab_images,
  party: party_images,
  recoginition: recoginition_images,
  research: research_images,
  home: home_images,
};

export const galleryLocations = {
  lab: '/gallery/lab/',
  party: '/gallery/party/',
  recoginition: '/gallery/recognition/',
  research: '/gallery/research/',
  home: '/gallery/home/',
};

export default gallery;
