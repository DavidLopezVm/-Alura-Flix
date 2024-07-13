import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
`;

function VideoCard({ video }) {
  return (
    <Card>
      <h3>{video.title}</h3>
      <a href={video.url} target="_blank" rel="noopener noreferrer">
        Watch
      </a>
    </Card>
  );
}

export default VideoCard;
