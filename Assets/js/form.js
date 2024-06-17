
// Function to get user input
const getUserInput = (id) => document.querySelector(id).value;

// Function to show error message
const showError = (message) => {
    const errorHandler = document.querySelector('#error');
    errorHandler.textContent = message;
};

// Function to save form data
const saveFormData = (formData) => {
    let posts = localStorage.getItem('blogPost');
    let dataArray = posts ? JSON.parse(posts) : [];
    dataArray.push(formData);
    localStorage.setItem('blogPost', JSON.stringify(dataArray));
};

// Function to handle form submission
const handleFormSubmit = (event) => {
    event.preventDefault();

    const username = getUserInput('#username');
    const title = getUserInput('#title');
    const content = getUserInput('#content');

    if (!username || !title || !content) {
        showError('Please Fill In The Missing Boxes!');
        return;
    }

    const formData = { username, title, content };
    saveFormData(formData);

    window.location.href = './blog.html';
};

//Finally an event listener for the form
document.querySelector('#form').addEventListener('submit', handleFormSubmit);
