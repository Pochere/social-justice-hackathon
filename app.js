document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        alert("Thank you for participating!");
      });
    });
  });

  function changeLanguage(language) {
    alert("Language changed to " + language + " (This is a placeholder; implement actual translation here)");
  }

  function subscribeForNotifications() {
    alert("You have subscribed to notifications!");
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const subscribeButton = document.createElement("button");
    subscribeButton.innerText = "Subscribe for Notifications";
    subscribeButton.classList.add("subscribe-button");
  
    document.body.appendChild(subscribeButton); // You can place this anywhere, e.g., after the poll or petition sections
  
    subscribeButton.addEventListener("click", subscribeForNotifications);
  });

  // Example: Analytics for social media links (optional)
const socialLinks = document.querySelectorAll('.social-links a');

socialLinks.forEach(link => {
  link.addEventListener('click', function() {
    console.log('Social media link clicked: ' + this.href);
    
  });
});

  
  
