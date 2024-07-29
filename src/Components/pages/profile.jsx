import React, { useState, useEffect } from 'react';
import { fetchUserProfile, fetchUserPosts, fetchUserFollowers, fetchUserFollowing } from '../Social-media Components/api';
import '../../App.css';



const profile = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [activeTab, setActiveTab] = useState('posts');

  useEffect(() => {
    setUser(fetchUserProfile());
    setPosts(fetchUserPosts());
    setFollowers(fetchUserFollowers());
    setFollowing(fetchUserFollowing());
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'posts':
        return (
          <div className="posts-grid">
            {posts.map(post => (
              <div key={post.id} className="post">
                <img src={post.image} alt="post" />
              </div>
            ))}
          </div>
        );
      case 'followers':
        return (
          <div className="followers-list">
            {followers.map(follower => (
              <div key={follower.id} className="follower">
                <img src='https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="avatar" />
                <span>{follower.name}</span>
              </div>
            ))}
          </div>
        );
      case 'following':
        return (
          <div className="following-list">
            {following.map(follow => (
              <div key={follow.id} className="following">
                <img src='https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="avatar" />
                <span>{follow.name}</span>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src='https://marketplace.canva.com/EAFxdcos7WU/1/0/1600w/canva-dark-blue-and-brown-illustrative-fitness-gym-logo-oqe3ybeEcQQ.jpg' alt="profile" className="profile-avatar" />
        <div className="profile-info">
          <h2>{user.username}</h2>
          <div className="profile-stats">
            <span>{posts.length} posts</span>
            <span>{followers.length} followers</span>
            <span>{following.length} following</span>
          </div>
          <h2><em>{user.bio}</em></h2>
        </div>
      </div>
      <div className="profile-tabs">
        <button onClick={() => setActiveTab('posts')} className={activeTab === 'posts' ? 'active' : ''}>Posts</button>
        <button onClick={() => setActiveTab('followers')} className={activeTab === 'followers' ? 'active' : ''}>Followers</button>
        <button onClick={() => setActiveTab('following')} className={activeTab === 'following' ? 'active' : ''}>Following</button>
      </div>
      <div className="profile-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default profile;