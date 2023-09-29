import React from 'react';
import LikeButton from './LikeButton';
import CommentSection from './CommentSection';

function Post({ post }) {
  return (
    <div>
      <h3>{post.caption}</h3>
      <LikeButton postId={post.id} />
      <CommentSection postId={post.id} />
    </div>
  );
}

export default Post;
