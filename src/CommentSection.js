import React, { useState } from 'react';
import { addData } from './db';

function CommentSection({ postId }) {
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addData('comments', { postId, text: comment });
    setComment('');
  };

  return (
    <div>
      {/* You'd also fetch and map over comments here to display them */}
      <form onSubmit={handleSubmit}>
        <input
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
}

export default CommentSection;
