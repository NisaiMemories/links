// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', () => {
    
    // Grab the share button from our HTML
    const shareButton = document.getElementById('shareBtn');

    // Add a click event listener to it
    shareButton.addEventListener('click', () => {
        // Get the current website URL
        const currentUrl = window.location.href;

        // Use the browser's Clipboard API to copy the link
        navigator.clipboard.writeText(currentUrl).then(() => {
            // Let the user know it worked
            alert('Link copied to clipboard!');
        }).catch(err => {
            console.error('Could not copy text: ', err);
            alert('Failed to copy link. Please copy it manually from your browser bar.');
        });
    });

});