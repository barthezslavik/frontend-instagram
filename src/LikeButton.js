import React from 'react';
import { addData } from './db';

function LikeButton({ postId }) {
  const handleLike = async () => {
    // Here, you'd probably check if a like exists first and then add or remove accordingly
    await addData('likes', { postId });
  };

  return (
    <button onClick={handleLike}>Like</button>
  );
}

export default LikeButton;
