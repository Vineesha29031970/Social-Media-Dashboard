import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCommentById } from '../Social-media Components/api';

const CommentDetail = () => {
  const { commentId } = useParams();
  const [comment, setComment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = fetchCommentById(commentId);
    setComment(data);
    setLoading(false);
  }, [commentId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Comment Details</h2>
      <p>{comment.content}</p>
    </div>
  );
};

export default CommentDetail;