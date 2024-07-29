import React, { useEffect, useState } from 'react';
import { fetchNotifications } from '../Social-media Components/api.jsx';


const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = fetchNotifications();
    setNotifications(data);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Notifications</p>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>{notification.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;