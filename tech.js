window.addEventListener('load', function() 
{
    const navigation = document.querySelector('.distinct');
    navigation.classList.add('pop-out');

    slideInOnLoad();
});


function slideInOnLoad() {
    document.querySelectorAll('.card').forEach(element => {
      element.classList.add('visible');
    });
  }
  //form submitting

function submitGoogleForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Replace these with your actual entry IDs from the pre-filled link
    const googleFormURL = "https://forms.gle/ANfwrBHuJAaYEsvWA";
    const entryName = "entry.name"; // Change to your actual entry ID for Name
    const entryEmail = "entry.email"; // Change to your actual entry ID for Email
    const entryMessage = "entry.message"; // Change to your actual entry ID for Message

    // Construct the URL with user inputs
    const redirectURL = `${googleFormURL}?${entryName}=${encodeURIComponent(name)}
                        &${entryEmail}=${encodeURIComponent(email)}
                        &${entryMessage}=${encodeURIComponent(message)}`;

    // Redirect to the Google Form
    window.location.href = redirectURL;
}
