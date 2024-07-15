import React from 'react';
import styles from 'styles/components/BackgroundVideo.module.scss';
import Image from 'next/image';
import WolfAvatarBlue from 'public/WolfAvatarBlue.png';

const BackgroundVideo: React.FC = () => {
  return (
    <div className={styles.videoBackground}>
      <video autoPlay loop muted playsInline>
        <source src="/planetBackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className={styles.wolfAvatarImage}> */}
      <Image
        color="#9198B0"
        src={WolfAvatarBlue}
        alt="WolfAvatarBlue"
        width={320}
        height={320}
        style={{
          position: 'absolute',
          top: '30%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      {/* </div> */}
    </div>
  );
};

export default BackgroundVideo;
