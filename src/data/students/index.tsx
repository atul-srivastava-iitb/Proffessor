import { mtech_alumni, mtech_current } from './mtech-dual-students';
import { phd_alumni, phd_current } from './phd-students';
import { postd_alumni, postd_current } from './post-doctoral-students';

const allStudents = {
  mtechAlumni: mtech_alumni,
  mtechCurrent: mtech_current,
  //
  phdCurrent: phd_current,
  phdAlumni: phd_alumni,
  //
  postCurrent: postd_current,
  postAlumni: postd_alumni,
};

export default allStudents;
