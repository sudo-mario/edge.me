// Function to open the popup with project details
function openPopup(title, description) {
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-description').textContent = description;
    document.getElementById('popup-overlay').style.display = 'flex';
  }
  
  // Function to close the popup
  function closePopup() {
    document.getElementById('popup-overlay').style.display = 'none';
  }
  