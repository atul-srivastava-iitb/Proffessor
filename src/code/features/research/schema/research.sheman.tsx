export interface RESEARCH_PROJECTS {
  heading: string;
  place: string;
  role: string;
  duration: string;
}

export interface RESEARCH_FACILITIES {
  heading: string;
  content: string;
  image: string;
}

export interface RESEARCH_ALL {
  projects: RESEARCH_PROJECTS[];
  facilities: RESEARCH_FACILITIES[];
}
