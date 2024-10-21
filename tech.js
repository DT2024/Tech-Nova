window.addEventListener('load', function() 
{
    const navigation = document.querySelector('.distinct');
    navigation.classList.add('pop-out');

    slideInOnLoad();
});


function slideInOnLoad() {
    document.querySelectorAll('.team').forEach(element => {
      element.classList.add('visible');
    });
  }

  //form submitting
  function submitGoogleForm() {
    // e.preventDefault();
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (name === '') {
        alert('Please enter your name.');
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        alert('Please enter your email.');
        return false;
    } else if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (message === '') {
        alert('Please enter your message.');
        return false;
    }

    // If validation passes, submit the form
    document.querySelector('.contact-form').submit();
    alert('Thank you! Your message has been sent.');


    document.querySelector('.contact-form').reset();
    window.location.href = 'https://www.technova.software';
}

// document.querySelector('.contact-form').addEventListener('submit', function(e) {
//     submitGoogleForm(e);
// });
// const name = document.getElementById('name').value;
    // const email = document.getElementById('email').value;
    // const message = document.getElementById('message').value;

    // // Replace these with your actual entry IDs from the pre-filled link
    // const googleFormURL = "https://forms.gle/ANfwrBHuJAaYEsvWA";
    // const entryName = "entry.name"; // Change to your actual entry ID for Name
    // const entryEmail = "entry.email"; // Change to your actual entry ID for Email
    // const entryMessage = "entry.message"; // Change to your actual entry ID for Message

    // Construct the URL with user inputs
    // const redirectURL = `${googleFormURL}?${entryName}=${encodeURIComponent(name)}
    //                     &${entryEmail}=${encodeURIComponent(email)}
    //                     &${entryMessage}=${encodeURIComponent(message)}`;
  // const redirectURL = "https://forms.gle/ANfwrBHuJAaYEsvWA";
  //   // Redirect to the Google Form
  //   window.location.href = redirectURL;

