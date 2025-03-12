// MERNAnimation.js

import React, { useState, useEffect, useRef } from 'react';
import './MERNAnimation.css';

function MERNAnimation({ onAnimationEnd }) {
  const [phase, setPhase] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    // Play the theme music as soon as the animation starts
    if (audioRef.current) {
      audioRef.current.play();
    }

    // Define each phase duration: 15 seconds per phase (total 60s)
    const phaseDuration = 15000;
    const phaseInterval = setInterval(() => {
      setPhase(prevPhase => (prevPhase < 3 ? prevPhase + 1 : prevPhase));
    }, phaseDuration);

    // End the animation after 60 seconds
    const endTimer = setTimeout(() => {
      onAnimationEnd();
    }, 60000);

    return () => {
      clearInterval(phaseInterval);
      clearTimeout(endTimer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [onAnimationEnd]);

  return (
    <div className="mernanimation-container">
      {/* Theme music */}
      <audio ref={audioRef} loop>
        <source src="/theme-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Phase 0: Swirling portal */}
      {phase === 0 && (
        <div className="phase phase-0">
          <h2 className="portal-title">Entering the Swirling Portal...</h2>
          <div className="portal" />
        </div>
      )}

      {/* Phase 1: Neon cityscape */}
      {phase === 1 && (
      <div className="phase phase-1">
          <h2>Immersive Digital Metropolis</h2>
          <div className="cityscape">
          {/* The road (a trapezoid to simulate perspective) */}
          <div className="road"></div>

          {/* Multiple buildings with staggered animations */}
          <div className="building left b1"></div>
          <div className="building right b2"></div>
          <div className="building left b3"></div>
          <div className="building right b4"></div>
          <div className="building left b5"></div>
          <div className="building right b6"></div>
          </div>
       </div>
      )}



      {/* Phase 2: Icon morphing */}
      {phase === 2 && (
        <div className="phase phase-2">
          <h2>Icon Morphing</h2>
          <div className="icons-container">
            <div className="icon-m morph-m">M</div>
            <div className="icon-e morph-e">E</div>
            <div className="icon-r morph-r">R</div>
            <div className="icon-n morph-n">N</div>
          </div>
        </div>
      )}

      {/* Phase 3: Data flow simulation */}
      {phase === 3 && (
        <div className="phase phase-3">
          <h2>Dynamic Data Flow &amp; Loop Transition</h2>
          <div className="data-flow">
            <div className="data-line line1" />
            <div className="data-line line2" />
            <div className="data-line line3" />
          </div>
          <p>Watch the streams of light as data moves through the MERN stack...</p>
        </div>
      )}
    </div>
  );
}

export default MERNAnimation;
