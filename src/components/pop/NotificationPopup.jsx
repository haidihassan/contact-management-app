import React, { useEffect, useState } from 'react';
import './NotificationPopup.css'; 

const NotificationPopup = ({ message, onClose }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const startFadeOut = () => {
      setIsFadingOut(true);
    };

    const timer = setTimeout(startFadeOut, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationEnd = () => {
    if (isFadingOut) {
      onClose(); 
    }
  };

  return (
    <div className={`notification-popup ${isFadingOut ? 'fade-out' : ''}`}
    onAnimationEnd={handleAnimationEnd}>
      <div className="notification-content">
      
        <p>{message}</p>
      </div>
    </div>
  );
};

export default NotificationPopup;
