import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import styled from "styled-components";

const Wrapper = styled.div`
  height: ${(props) => (props.src ? "auto" : "350px")};
`

const Player = ({ src, poster }) => {
  const videoRef = useRef(null); 

  useEffect(() => {
    const vjsPlayer = videojs(videoRef.current);

    if (src) {
      vjsPlayer.src({ type: "video/mp4", src: src });
    }

    if (poster) {
      vjsPlayer.poster(poster)
    }

    return () => {
      if (vjsPlayer) {
        vjsPlayer.dispose();
      }
    };
  }, [src, poster]);

  return (
    <Wrapper>
      <div data-vjs-player>
        <video
          controls
          ref={videoRef}
          className="video-js vjs-fluid vjs-big-play-centered"
        ></video>
      </div>
    </Wrapper>
  );
};

export default Player;
