// A function to get the query parameter from the URL.
function getStoryIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// A function to display the full story.
function displayFullStory() {
    // Get the story ID from the URL.
    const storyId = getStoryIdFromUrl();

    // Get stories from local storage.
    const stories = JSON.parse(localStorage.getItem('stories')) || [];

    // Check if the story ID is valid and the story exists.
    if (storyId !== null && stories[storyId]) {
        const story = stories[storyId];
        const container = document.getElementById('story-content-container');

        // Create HTML elements for the title and content.
        const titleElement = document.createElement('h2');
        titleElement.textContent = story.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = story.content;

        // Append the new elements to the container.
        container.appendChild(titleElement);
        container.appendChild(contentElement);

        // Update the page title dynamically.
        document.title = story.title;
    } else {
        // Display a message if the story is not found.
        const container = document.getElementById('story-content-container');
        container.innerHTML = '<p>Story not found.</p>';
    }
}

// Run the function when the page loads.
document.addEventListener('DOMContentLoaded', displayFullStory);