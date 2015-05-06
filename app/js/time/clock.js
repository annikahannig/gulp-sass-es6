'use strict';

var setTime = function(elId) {
  var el = document.getElementById(elId);
  if(!el) {
    return;
  }

  el.innerText = new Date();
};

var runClock = function(elId) {
  setTime(elId);
  setInterval(() => {
    setTime(elId);
  }, 1000);
};

export default runClock;

