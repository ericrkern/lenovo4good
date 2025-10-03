/**
 * Hello World Application
 * Displays a greeting message to the user
 * @module HelloWorld
 */

/**
 * Displays a message on the page
 * @param {string} message - The message to display
 * @param {string} elementId - The ID of the element to display the message in
 */
const displayMessage = (message, elementId) => {
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.error(`Element with ID '${elementId}' not found`);
    return;
  }
  
  element.textContent = message;
};

/**
 * Initializes the application when the DOM is ready
 */
const init = () => {
  // Display the hello world message
  displayMessage('Hello World', 'message');
  
  // Log to console for verification
  console.log('Hello World application initialized successfully');
};

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

