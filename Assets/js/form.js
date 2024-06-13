const getUserInput = (id) => document.querySelector(id).value;

const showError = (message) => {
    const errorHandler = document.querySelector('#error');
    errorHandler.textContent = message;
};

const saveFormData = (formData) => {
    let posts = localStorage.getItem('blogPost');
    let dataArray = posts ? JSON.parse(posts) : [];
    dataArray.push(formData);
    localStorage.setItem('blogPost', JSON.stringify(dataArray));
};

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

document.querySelector('#form').addEventListener('submit', handleFormSubmit);
