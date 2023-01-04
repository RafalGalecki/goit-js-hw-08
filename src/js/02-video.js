"use strict";

import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

const updatedTime = ({ seconds } = 0) => {
  localStorage.setItem(STORAGE_KEY, seconds);
}
const getStoredTime = () => {
  return localStorage.getItem(STORAGE_KEY);
};

player.setCurrentTime(getStoredTime());

player.on("timeupdate", throttle(updatedTime, 1000));