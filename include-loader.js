// include-loader.js

document.querySelectorAll('[include-html]').forEach(el => {
  const url = el.getAttribute('include-html');
  fetch(url)
    .then(response => response.text())
    .then(html => {
      el.innerHTML = html;
      if (typeof redirectToOSSection === 'function') {
        redirectToOSSection();
      }
    });
});
