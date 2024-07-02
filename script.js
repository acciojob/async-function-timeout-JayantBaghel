//your JS code here. If required.
document.getElementById('btn').addEventListener('click', displayMessageWithDelay);

async function displayMessageWithDelay() {
    // Retrieve values from input fields
    const message = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value);

    // Validate delay value
    if (isNaN(delay) || delay < 0) {
        alert('Please enter a valid delay in milliseconds.');
        return;
    }

    // Clear previous output
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = '';

    // Function to introduce delay
    function delayFunction(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Use async/await to introduce delay before displaying message
    await delayFunction(delay);

    // Display the message in the output div
    outputDiv.textContent = message;
}
