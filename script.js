// Log when a project link is clicked
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        console.log(`You clicked on ${button.previousElementSibling.innerText}`);
    });
});