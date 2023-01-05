"use strict";

import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

const videoplayerCurrentTime = ({ seconds } = 0) => {
  localStorage.setItem(STORAGE_KEY, seconds);
}
const getVideoplayerCurrentTime = () => {
  return localStorage.getItem(STORAGE_KEY);
};

player.setCurrentTime(getVideoplayerCurrentTime());

player.on('timeupdate', throttle(videoplayerCurrentTime, 1000));