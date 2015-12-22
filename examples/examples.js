
import React from 'react';
import ReactDOM from 'react-dom';
import SpotifyPlayer from '../dist/SpotifyPlayer.js';

ReactDOM.render(
  <SpotifyPlayer uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk" size={{width: 500, height: 800}} theme="white" view="coverart" />,
  document.querySelector('.player')
);
