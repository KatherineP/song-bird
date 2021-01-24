import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import styled from 'styled-components';

const StyledAudio = styled.div`
  .rhap_container {
    box-shadow: none !important;
    background-color: aliceblue !important;
  }
  .rhap_controls-section {
    flex: 0 !important;
  }
  .rhap_button-clear,
  .rhap_main-controls-button,
  .rhap_play-pause-button {
    color: green !important;
  }
`;

const Audio = ({ audio }) => {
  return (
    <StyledAudio>
      <AudioPlayer
        autoPlayAfterSrcChange={false}
        showJumpControls={false}
        customAdditionalControls={[]}
        customVolumeControls={[]}
        layout="horizontal-reverse"
        src={audio}
      />
    </StyledAudio>
  );
};

export default Audio;
