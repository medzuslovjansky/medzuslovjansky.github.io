import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import style from './IPA.module.scss';
import database from './database';

const IPA = ({ script = 'art', children: phoneme }) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);
  const audioLink = database[phoneme];
  const hasAudio = !!audioLink;

  const toggleAudio = () => {
    const audioCurrent = audioRef.current;
    if (audioCurrent) {
      if (audioCurrent.paused || audioCurrent.ended) {
        audioCurrent.currentTime = 0;
        audioCurrent.play();
      } else {
        audioCurrent.pause();
      }
    }
  };

  const remark = audioLink && audioLink.match(/\/audio\/[A-Z]/)
    ? 'Each audio clip is the work of Peter Isotalo, User:Denelson83, UCLA Phonetics Lab Archive 2003, User:Halibutt, User:Pmx or User:Octane, and made available under a free and/or copyleft licence.'
    : '';

  return (
    <span
      lang={`${script}-fonipa`}
      className={clsx(style.ipa, 'notranslate', { [style.interactive]: hasAudio, [style.audioPlaying]: isAudioPlaying })}
      translate="no"
      title={remark}
      onClick={toggleAudio}
    >
            {phoneme}
      {hasAudio && (
        <audio
          key="audio"
          preload="none"
          ref={audioRef}
          onPlaying={() => setIsAudioPlaying(true)}
          onWaiting={() => setIsAudioPlaying(true)}
          onEnded={() => setIsAudioPlaying(false)}
          onPause={() => setIsAudioPlaying(false)}
        >
          <source src={audioLink} type="audio/mpeg" />
        </audio>
      )}
        </span>
  );
};

export default IPA;
