import React from 'react';
import './audio.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Audio = ({ audio }) => (
  <AudioPlayer
    autoPlayAfterSrcChange={false}
    showJumpControls={false}
    customAdditionalControls={[]}
    customVolumeControls={[]}
    layout="horizontal-reverse"
    src={audio}
  />
);

export { Audio };
