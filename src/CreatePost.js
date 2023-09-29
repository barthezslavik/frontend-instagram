import React, { useState } from 'react';
import { addData } from './db';

function CreatePost({ userId }) {
  const [caption, setCaption] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addData('posts', { userId, caption });
    setCaption('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={caption}
        onChange={e => setCaption(e.target.value)}
        placeholder="What's on your mind?"
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default CreatePost;
