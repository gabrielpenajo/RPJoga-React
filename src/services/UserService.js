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

export async function getUser(email) {
   return await fetch('http://localhost:5000/user/?email=' + email, {
        headers: { 'Content-Type': 'application/json' },
        method: 'GET'
    });
}

export function getEmail() {
    const session = JSON.parse(localStorage.getItem("rpjoga"));
    return session.useremail;
}