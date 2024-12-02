import React from "react";

const VideoTab = () => {
  return (
    <div className="video-yt">
      <div className="box-text">
        <p className="text-video">
          Una cápsula de edición limitada que celebra la fuerza, seguridad y
          autenticidad femenina.
        </p>
        <h2>HAPPY IS THE NEW SEXY</h2>
      </div>
      <div className="iframe-video">
        <iframe
          width="720"
          height="380"
          src="https://www.youtube-nocookie.com/embed/g8C-Q1rEeb4?si=sD5dYMrE1LAXrWd2&amp;autoplay=1&loop=1&mute=0&controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <button className="button-prevt" type="button" onClick={() => {
          document.querySelectorAll(".button-nav-1")[0].click()
        }}>Registrarme en preventa</button>
      </div>
    </div>
  );
};

export default VideoTab;
