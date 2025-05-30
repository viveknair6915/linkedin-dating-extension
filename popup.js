const checkbox = document.getElementById('toggle-mode');

// Load switching state
chrome.storage.sync.get(['datingMode'], ({ datingMode }) => {
  checkbox.checked = Boolean(datingMode);
});

checkbox.addEventListener('change', () => {
  chrome.storage.sync.set({ datingMode: checkbox.checked });
});