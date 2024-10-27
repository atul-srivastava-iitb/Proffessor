'use client';
import React from 'react';
import DefaultPageWrapper from '@/code/common/layout/defpagewrapper';
import { BlockText } from '@/code/blocks';
import ContactCard from './contactCard';
function HomePage() {
  return (
    <DefaultPageWrapper>
      <div className="h-10" />
      <BlockText.pageHead text={'Contact'} />
      <div className="h-10" />
      <ContactCard />
    </DefaultPageWrapper>
  );
}

export default HomePage;
