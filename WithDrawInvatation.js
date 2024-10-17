// Function to automate the process
function automateWithdraw() {
    // Step 1: Select all button elements with the specified class and text
    let buttons = Array.from(document.querySelectorAll('.artdeco-button--tertiary'))
        .filter(button => button.querySelector('span') && button.querySelector('span').textContent.trim() === 'Withdraw');

    // Initialize a counter to track the number of withdrawals
    let withdrawalCount = 0;

    // Step 2: Define a function to process each button
    function processButton() {
        if (buttons.length === 0) {
            // Step 3: No more buttons left, find the "Next" button
            const nextButton = document.querySelector('.artdeco-pagination__button--next');
            if (nextButton && !nextButton.disabled) {
                console.log('Navigating to the next page...');
                nextButton.click();
                // Wait for the next page to load before starting over
                setTimeout(automateWithdraw, 1500); // Adjusted timeout for faster operation
            } else {
                console.log('No more pages to process.');
                console.log(`Total withdraw requests processed: ${withdrawalCount}`);
            }
            return;
        }

        // Get the first button in the array and click it
        const button = buttons.shift();
        button.click();

        // Wait for the modal to appear, then find and click the confirmation button
        setTimeout(() => {
            const confirmButton = document.querySelector('.artdeco-button--primary');
            if (confirmButton) {
                confirmButton.click();
                withdrawalCount++;
                console.log(`Withdraw request processed. Total so far: ${withdrawalCount}`);

                // Wait for the confirmation to process before continuing with the next button
                setTimeout(processButton, 1000); // Adjusted timeout for faster operation
            } else {
                console.log('Confirmation button not found. Retrying...');
                buttons.unshift(button); // Re-add the button if something went wrong
                setTimeout(processButton, 1000); // Retry after a shorter delay
            }
        }, 1000); // Adjusted timeout for faster operation
    }

    // Start processing the buttons
    processButton();
}

// Run the function to start the process
automateWithdraw();
