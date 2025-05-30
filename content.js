(function() {
  // Check storage for dating mode on/off
  chrome.storage.sync.get(['datingMode'], ({ datingMode }) => {
    if (!datingMode) return;

    function injectDatingCard() {
      const nameElem = document.querySelector('.pv-top-card--list li.inline');
      if (!nameElem) return;
      const name = nameElem.innerText.trim();

      let card = document.querySelector('#dating-mode-card');
      if (card) return;

      card = document.createElement('div');
      card.id = 'dating-mode-card';
      card.className = 'dating-card';
      card.innerHTML = `
        <h2>${name}</h2>
        <p>💖 Looking for a match?</p>
        <button id="send-crush">Send Crush</button>
      `;

      document.body.appendChild(card);

      document.getElementById('send-crush').addEventListener('click', () => {
        alert(`Crush sent to ${name}! 💌`);
      });
    }

    // Run on initial load and on SPA navigation
    injectDatingCard();
    new MutationObserver(injectDatingCard).observe(document.body, { childList: true, subtree: true });
  });
})();