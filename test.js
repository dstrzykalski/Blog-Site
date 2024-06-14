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

const handleClearButtonClick = () => {
    localStorage.clear();
};

document.querySelector('#form').addEventListener('submit', handleFormSubmit);
document.querySelector('#clear').addEventListener('click', handleClearButtonClick);