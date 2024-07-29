import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostById } from '../Social-media Components/api';

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = fetchPostById(postId);
    setPost(data);
    setLoading(false);
  }, [postId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Post Details</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;