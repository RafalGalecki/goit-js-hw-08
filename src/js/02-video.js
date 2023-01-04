"use strict";

import Player from '@vimeo/player';

const player = new Player('handstick', {
  id: 19231868,
  width: 640,
});

player.on('play', function () {
  console.log('played the video!');
});



//event listener:
const onPlay = function (timeupdate) {
  // data is an object containing properties specific to that event
};
console.log(onPlay);
//player.on('play', onPlay);

// //to remove event listener:
// const onPlay = function (data) {
//   // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);

// // If later on you decide that you don’t need to listen for play anymore.
// player.off('play', onPlay);

// // Alternatively, `off` can be called with just the event name to remove all
// // listeners.
// player.off('play');