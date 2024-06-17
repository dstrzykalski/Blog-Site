
//this code sets the logic for displaying the info entered into the blog
const postBlog = () => {
    const blogContainer = document.querySelector('#blog-post');
    const storedData = localStorage.getItem('blogPost');

    if (storedData) {
        const dataArray = JSON.parse(storedData);
        const fragment = document.createDocumentFragment();

        //this code creates an element for each blog post
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

        //this code appends the blog posts to the page
        blogContainer.appendChild(fragment);

    
    }
};

//this is the function that runs the code above
postBlog();

const clearButton = document.querySelector('#clear');
const blogContainer = document.querySelector('#blog-post');

//and finally logic for a clear button
clearButton.addEventListener('click', () => {
    blogContainer.innerHTML = '';
});