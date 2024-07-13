import React from 'react';
import { useVideos } from '../context/VideoContext';
import VideoCard from './VideoCard';
import styled from 'styled-components';

const Section = styled.div`
  margin: 2rem;
`;

function VideoList({ section }) {
  const { videos } = useVideos();

  return (
    <Section>
      <h2>{section}</h2>
      {videos
        .filter(video => video.section === section)
        .map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
    </Section>
  );
}

export default VideoList;
