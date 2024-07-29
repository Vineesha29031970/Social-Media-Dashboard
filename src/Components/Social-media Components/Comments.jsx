import React, { useEffect, useState } from 'react';
import { fetchComments, updateComment } from '../Social-media Components/api.jsx';
import '../../App.css'

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editContent, setEditContent] = useState('');
  const [editImage, setEditImage] = useState(null);

  useEffect(() => {
    const data = fetchComments();
    setComments(data);
    setLoading(false);
  }, []);

  const handleEdit = (comment) => {
    setEditingId(comment.id);
    setEditContent(comment.content);
    setEditImage(comment.image || null);
  };

  const handleSave = (commentId) => {
    const updatedComments = comments.map(comment =>
      comment.id === commentId ? { ...comment, content: editContent, image: editImage } : comment
    );
    setComments(updatedComments);
    updateComment(commentId, editContent, editImage);
    setEditingId(null);
  };

  const handleImageChange = (e) => {
    setEditImage(URL.createObjectURL(e.target.files[0]));
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <p>Most Viewed Comments</p>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            {editingId === comment.id ? (
              <div>
                <input
                  type="text"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {editImage && <img src={editImage} alt="preview" width="100" />}
                <button onClick={() => handleSave(comment.id)}>Save</button>
              </div>
            ) : (
              <div>
                {comment.content}
                {comment.image && <img src={comment.image} alt="comment" width="100" />}
                <button onClick={() => handleEdit(comment)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;