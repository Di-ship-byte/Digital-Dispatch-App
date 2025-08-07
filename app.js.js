// A function to handle displaying stories on the main page.
function displayStories() {
    const storiesList = document.getElementById('stories-list');
    storiesList.innerHTML = ''; // Clear the current list before adding new stories.

    // Get stories from local storage.
    const stories = JSON.parse(localStorage.getItem('stories')) || [];

    // Loop through each story and create a list item with a link.
    stories.forEach((story, index) => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');

        // The link will point to a new page to display the full story.
        link.href = story.html?id=${index};
        link.textContent = story.title;

        listItem.appendChild(link);
        storiesList.appendChild(listItem);
    });
}

// A function to handle the form submission.
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from reloading the page.

    // Get the title and content from the form inputs.
    const title = document.getElementById('story-title').value;
    const content = document.getElementById('story-content').value;

    // Create a story object.
    const newStory = {
        title,
        content
    };

    // Get existing stories from local storage.
    const stories = JSON.parse(localStorage.getItem('stories')) || [];

    // Add the new story to the array.
    stories.push(newStory);

    // Save the updated array back to local storage.
    localStorage.setItem('stories', JSON.stringify(stories));

    // Clear the form fields.
    document.getElementById('add-story-form').reset();

    // Refresh the story list on the page.
    displayStories();
}

// Event listener to run when the page loads.
document.addEventListener('DOMContentLoaded', () => {
    // Display any existing stories when the page first loads.
    displayStories();

    // Attach the form submission function to the form's submit event.
    const form = document.getElementById('add-story-form');
    form.addEventListener('submit', handleFormSubmit);
});