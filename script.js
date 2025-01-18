document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    const sendButton = document.getElementById('sendButton');
    const inputField = document.querySelector('.chatbox input');

    // FAQ hover effect for answers
    faqItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const answer = item.querySelector('.answer');
            answer.style.display = 'block';
        });

        item.addEventListener('mouseout', () => {
            const answer = item.querySelector('.answer');
            answer.style.display = 'none';
        });
    });

    // Simulate NLP system status
    const isNLPWorking = false; // Set this to true to simulate a working NLP system

    // Validation for Send button
    sendButton.addEventListener('click', () => {
        const userInput = inputField.value.trim();

        if (!userInput) {
            // If input field is empty, show a popup
            alert("Please type an enquiry before clicking Send.");
        } else if (!isNLPWorking) {
            // Simulate NLP system status check
            alert("The NLP engine is currently unavailable. Please try again later.");
        } else {
            // If input is valid and NLP system is working
            alert("Your enquiry has been sent successfully!");
            inputField.value = ""; // Clear the input field
        }
    });
});

