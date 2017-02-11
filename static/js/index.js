'use strict';

(function (document) {

  var sections = Array.prototype.slice.call(document.querySelectorAll('.section-summary'));
  sections.forEach(function (el) {
    el.addEventListener('click', onToggle, false);
  });

  function onToggle(e) {
    e.currentTarget.parentNode.classList.toggle('expanded');
  }
})(document);
