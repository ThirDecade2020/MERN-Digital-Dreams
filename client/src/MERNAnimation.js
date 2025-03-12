// MERNAnimation.js

import React, { useEffect } from 'react';
import './MERNAnimation.css';

function MERNAnimation({ onAnimationEnd }) {
  useEffect(() => {
    // Automatically stop the animation after 60 seconds
    const timer = setTimeout(() => {
      onAnimationEnd();
    }, 60000);

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="mernanimation-container">
      <div className="mernanimation-content">
        <h2>Welcome to the MERN Digital Universe!</h2>
        <p>Enjoy the 1-minute animated journey!</p>
      </div>
    </div>
  );
}

export default MERNAnimation;
