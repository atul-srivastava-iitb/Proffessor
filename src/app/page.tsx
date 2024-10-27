'use client';
import React from 'react';
import DefaultPageWrapper from '@/code/common/layout/defpagewrapper';
import GalleryMain from '@/code/features/gallery/app';
import HeaderProfile from '@/code/features/home/components/header';
import TitleAndText from '@/code/features/home/components/titleandtext';
import ResearchHighlights from '@/code/features/home/components/research-highlights';
import LatestUpdates from '@/code/features/home/components/latestupdates';

function HomePage() {
  return (
    <DefaultPageWrapper>
      <GalleryMain showType="carousel" type="home" />
      <div className="h-10" />
      <HeaderProfile />
      <div className="h-10" />
      <TitleAndText />
      <div className="h-10" />
      <ResearchHighlights />
      <div className="h-10" />
      <LatestUpdates />
      <div className="h-10" />
    </DefaultPageWrapper>
  );
}

export default HomePage;
