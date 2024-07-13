import React from 'react';
import VideoList from '../components/VideoList';

function Home() {
  return (
    <div>
      <VideoList section="Section 1" />
      <VideoList section="Section 2" />
      {/* Agrega más secciones según sea necesario */}
    </div>
  );
}

export default Home;
