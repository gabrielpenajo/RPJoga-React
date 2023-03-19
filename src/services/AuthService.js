export async function loginUser(credentials) {
    return fetch('http://localhost:5000/user/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
}

export function checkAuth(navigate) {
    const session = JSON.parse(localStorage.getItem("rpjoga"))
    if (!session) {
        navigate("/")
        return
    }
    const expireDate = new Date(session.cookie.expires).getTime()
    const today = Date.now()
    if (expireDate < today) {
        navigate("/")
    } 
}

export function logout() {
    localStorage.removeItem("rpjoga")
}