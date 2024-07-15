import React from 'react';
import styles from 'styles/components/BackgroundVideo.module.scss';

const BackgroundVideo: React.FC = () => {
  return (
    <div className={styles.videoBackground}>
      <video autoPlay loop muted playsInline>
        <source src="/planetBackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
