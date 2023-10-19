export function saveHasUser(hasUser: boolean) {
    localStorage.setItem('hasUser', JSON.stringify(hasUser))
}

export function loadHasUser() {
    const storedHasUser = localStorage.getItem('hasUser')
    return storedHasUser ? JSON.parse(storedHasUser) as boolean : null
}