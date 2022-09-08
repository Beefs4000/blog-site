
async function postHandler(event) {
    event.preventDefault();

    const content = document.querySelector('#body').value.trim()

    const postId = document.getElementById('submit-btn').getAttribute('data-id')

    if (content) {
        const res = await fetch('/comment/', {
            method: 'POST',
            body: JSON.stringify({
                content,
                postId
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (res.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to create comment')
        }
    }
}
const form = document.querySelector('.comment-form')
    .addEventListener('submit', postHandler);