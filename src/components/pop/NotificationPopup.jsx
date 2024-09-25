import React, { useEffect, useState } from 'react';
import './NotificationPopup.css'; 

const NotificationPopup = ({ message, onClose }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        onClose(); 
      }, 500); 
    }, 3000); 
    return () => clearTimeout(timer); 
  }, [message, onClose]);

  return (
    <div className={`notification-popup ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="notification-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default NotificationPopup;
