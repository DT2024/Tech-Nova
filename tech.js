window.addEventListener('load', function() {
  // Apply pop-out animation to distinct, team, and projects sections
  const elementsToPop = document.querySelectorAll('.distinct, .team, .projects');
  elementsToPop.forEach(element => {
      element.classList.add('pop-out');
  });

  // Apply slide-in animation to cards, project cards, and profiles
  slideInOnLoad();
});

function slideInOnLoad() {
  const elementsToSlide = document.querySelectorAll('.card, .project-card, .profile');
  elementsToSlide.forEach(element => {
      element.classList.add('visible');
  });
}

function submitGoogleForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
      // Use the actual Google Form response URL and entry IDs
      const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdTMejwO1UWICcGjcnTYEJyc_KWjAI3GElvUltpCPHvCq_Pxg/formResponse';
      const formData = new FormData();
      // Replace these entry IDs with the actual ones from your Google Form
      formData.append('entry.123456789', name); // Replace with actual 'Name' entry ID
      formData.append('entry.987654321', email); // Replace with actual 'Email' entry ID
      formData.append('entry.456789123', message); // Replace with actual 'Message' entry ID

      fetch(googleFormUrl, {
          method: 'POST',
          body: formData,
          mode: 'no-cors'
      }).then(() => {
          alert('Thank you for your message! We will get back to you soon.');
          document.getElementById('contact-form').reset();
      }).catch(error => {
          console.error('Error submitting form:', error);
          alert('There was an error submitting your message. Please try again later.');
      });
  } else {
      alert('Please fill out all fields.');
  }
}