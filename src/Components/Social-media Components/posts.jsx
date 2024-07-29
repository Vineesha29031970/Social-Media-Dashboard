import React, { useEffect, useState } from 'react';
import { fetchUserPosts } from './api.jsx';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = fetchUserPosts();
    setPosts(data);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.content}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;