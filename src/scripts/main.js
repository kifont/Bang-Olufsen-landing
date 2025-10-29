/* eslint-disable max-len */
'use strict';

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем стандартную отправку
    window.alert('Форма отправлена!');
    this.reset();
  });
});
