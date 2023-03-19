export async function loginUser(credentials) {
    return fetch('http://localhost:5000/user/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}