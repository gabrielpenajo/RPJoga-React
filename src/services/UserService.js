export async function registerUser(user) {
    return fetch('http://localhost:5000/user/', {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
}

export async function editUser(user) {
    return fetch('http://localhost:5000/user/', {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
}