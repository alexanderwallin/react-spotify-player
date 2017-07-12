
import React from 'react';
import ReactDOM from 'react-dom';
import SpotifyPlayer from '../dist/SpotifyPlayer.js';

ReactDOM.render(
  <SpotifyPlayer uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk" size={{width: 800, height: 500}} theme="white" view="list" />,
  document.querySelector('.player')
);
