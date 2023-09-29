import React from 'react';
import Post from './Post';

function UserProfile({ userId, posts = [] }) {  // Default posts to an empty array
    return (
      <div>
        <h2>{userId}'s Profile</h2>
        {posts && posts.map(post => (  // Check if posts exists and is an array
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }

export default UserProfile;
