import React from 'react';
import DefaultPageWrapper from '@/code/common/layout/defpagewrapper';
import Students from '@/code/features/students/app/students';
function Page() {
  return (
    <DefaultPageWrapper>
      <Students />
    </DefaultPageWrapper>
  );
}

export default Page;
