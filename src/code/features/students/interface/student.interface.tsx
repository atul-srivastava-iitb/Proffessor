export interface STUDENTS {
  name: string;
  image: string;
  texta: string;
  textb: string;
  textc: string;
  link?: string;
}
export interface STUDENTSALL {
  mtechAlumni: STUDENTS[];
  mtechCurrent: STUDENTS[];
  //
  phdCurrent: STUDENTS[];
  phdAlumni: STUDENTS[];
  //
  postCurrent: STUDENTS[];
  postAlumni: STUDENTS[];
}
