let userProfile = {
  id: 1,
  username: 'Billy Butcher',
  avatar: 'https://via.placeholder.com/150',
  bio: 'This is the bio of Billy Butcher.'
};

let posts = [
  { id: 1, image: 'https://marketplace.canva.com/EAFxdcos7WU/1/0/1600w/canva-dark-blue-and-brown-illustrative-fitness-gym-logo-oqe3ybeEcQQ.jpg' },
  { id: 2, image: 'https://media.cnn.com/api/v1/images/stellar/prod/220317153849-diet-culture-stock.jpg?c=original' },
  { id: 3, image: 'https://fitnessprogramer.com/wp-content/uploads/2023/10/ppl-workout-program.webp' }
];

let followers = [
  { id: 1, name: 'John', avatar: 'https://via.placeholder.com/150' },
  { id: 2, name: 'maeve', avatar: 'https://via.placeholder.com/150' }
];

let following = [
  { id: 1, name: 'John', avatar: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Maeve', avatar: 'https://via.placeholder.com/150' }
];

let comments = [
  { id: 1, postId: 1, content: 'Nice post!' },
  { id: 2, postId: 2, content: 'Great!' },
  { id: 3, postId: 3, content: 'Amazing!' }
];

let notifications = [
  { id: 1, type: 'follow', content: 'John Started Following You' },
  { id: 2, type: 'follow', content: 'Maeve started following you'},
  { id: 3, type: 'comment', content: 'Malvika commented on your post' },
  { id: 4, type: 'comment', content: 'Joe commented on your post' },
  { id: 4, type: 'comment', content: 'Dhanvi and Maeve liked your post' }    
];




export const fetchUserProfile = () => {
  return userProfile;
};

export const fetchUserPosts = () => {
  return posts;
};

export const fetchUserFollowers = () => {
  return followers;
};

export const fetchUserFollowing = () => {
  return following;
};

export const fetchComments = () => {
  return comments;
};

export const fetchNotifications = () => {
  return notifications;
};

export const updateUserProfileImage = (newImage) => {
  userProfile.avatar = newImage;
};

export const updateComment = (commentId, newContent) => {
  const comment = comments.find(c => c.id === commentId);
  if (comment) {
    comment.content = newContent;
  }
};

export const fetchPostById = (postId) => {
  return posts.find(post => post.id === postId);
};

export const fetchCommentById = (commentId) => {
  return comments.find(comment => comment.id === commentId);
};
