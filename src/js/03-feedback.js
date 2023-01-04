'use strict';
const throttle = require('lodash.throttle');

const form = document.querySelector('form');

window.addEventListener('load', () => {
  Array.from(form.elements).forEach(el => {
    if (el.name) {
      const feedbackFormState = localStorage.getItem(el.name);
      el.value = feedbackFormState;
    }
  });
});

form.addEventListener('input', e => {
  e.preventDefault();

  Array.from(form.elements).forEach(el => {
    if (el.name) {
      localStorage.setItem(el.name, el.value);
    }
  });
});
 