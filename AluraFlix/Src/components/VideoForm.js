import React, { useState } from 'react';
import styled from 'styled-components';
import { useVideos } from '../context/VideoContext';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem;
`;

const Input = styled.input`
  margin: 0.5rem 0;
  padding: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
`;

function VideoForm() {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [section, setSection] = useState('');
  const { videos, setVideos } = useVideos();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVideo = { id: videos.length + 1, title, url, section };
    setVideos([...videos, newVideo]);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <Input type="text" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} />
      <Input type="text" placeholder="Section" value={section} onChange={(e) => setSection(e.target.value)} />
      <Button type="submit">Upload</Button>
    </Form>
  );
}

export default VideoForm;
