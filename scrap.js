function showMessage(message) {
    var messageOverlay = document.getElementById('messageOverlay');
    messageOverlay.textContent = message;
    messageOverlay.style.display = 'flex';

    setTimeout(function() {
      messageOverlay.style.display = 'none';
    }, 3000); // Hide the message after 3 seconds
  }