window.addEventListener('load', function() {
    // Apply pop-out animation to distinct, team, and projects sections
    const elementsToPop = document.querySelectorAll('.distinct, .team, .projects');
    elementsToPop.forEach(element => {
        element.classList.add('pop-out');
    });

    // Start the continuous slide-in animation
    slideInContinuously();
});

function slideInContinuously() {
    // Select all project cards and team cards
    const projectCards = document.querySelectorAll('.projects .project-card');
    const teamCards = document.querySelectorAll('.team .card');

    // Combine both sets of cards into one array
    const allCards = [...projectCards, ...teamCards];

    // Function to animate cards sequentially
    function animateCards() {
        // Reset all cards to their initial position (off-screen)
        allCards.forEach(card => {
            card.classList.remove('visible'); // Remove the visible class to reset position
        });

        // Animate each card with a delay
        allCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible'); // Slide in the card
            }, index * 500); // 500ms delay between each card
        });

        // Calculate the total time for one cycle (number of cards * delay per card + animation duration)
        const totalCycleTime = allCards.length * 500 + 5000; // 5000ms is the animation duration from CSS

        // Schedule the next cycle
        setTimeout(animateCards, totalCycleTime);
    }

    // Start the first cycle
    animateCards();
}

function submitGoogleForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdTMejwO1UWICcGjcnTYEJyc_KWjAI3GElvUltpCPHvCq_Pxg/formResponse';
        const formData = new FormData();
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