// scripts.js
document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("contactForm");
  form.addEventListener("submit", function(event) {
      event.preventDefault();
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;

      // Simple validation
      if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
          alert("Please fill in all fields.");
          return;
      }

      // You can add more sophisticated validation here if needed

      // If all is good, you can submit the form
      alert("Form submitted successfully!");
      form.reset();
  });
});
