import React from 'react';
import Comments from './Comments';
import Notifications from './Notifications';




const Dashboard = () => {
  return (
    <div>
      <h1>Social Media Dashboard</h1>
      
    
      <Comments />
      <Notifications />
    </div>
  );
};

export default Dashboard;