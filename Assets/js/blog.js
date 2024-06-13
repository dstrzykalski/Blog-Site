const postBlog = () => {
    const blogContainer = document.querySelector('#blog-post');
    const storedData = localStorage.getItem('blogPost');

    if (storedData) {
        const dataArray = JSON.parse(storedData);
        const fragment = document.createDocumentFragment();

        dataArray.forEach(({ username, title, content }) => {
            const card = document.createElement('article');
            card.classList.add('card');
            const cardBody = document.createElement('div');
            cardBody.classList.add('cardBody');

            cardBody.innerHTML = `
                <h5>${username}</h5>
                <h6>${title}</h6>
                <p>${content}</p>
            `;

            card.append(cardBody);
            fragment.appendChild(card);
        });

        blogContainer.appendChild(fragment);
    }
};

postBlog();

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    blogContainer.innerHTML = '';
});

clearButton();
