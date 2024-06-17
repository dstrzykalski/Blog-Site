//this is the logic for the dark mode toggle, but i cant seem to get it to work

//this code should set the idea of a dark/light mode to the local storage
function setMode(mode) {
    localStorage.setItem('mode', mode);
    if (mode === 'light') {
        document.body.classList.remove('dark-mode');
    } else {
        document.body.classList.add('dark-mode');
    }
}

//this code is the actual function that toggles the mode
function toggleMode() {
    const currentMode = localStorage.getItem('mode');
    if (currentMode === 'light') {
        setMode('dark');
    } else {
        setMode('light');
    }
}

//this code is supposed to check if the mode is saved in local storage and set it
const savedMode = localStorage.getItem('mode');
if (savedMode) {
    setMode(savedMode);
}

//and this is the event listener that should make the button on the blog.html page function
document.querySelector('#toggle-mode').addEventListener('click', toggleMode);
