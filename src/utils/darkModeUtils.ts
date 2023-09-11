export function saveDarkModeValue(value: boolean | null) {
    localStorage.setItem('darkModeValue', JSON.stringify(value))
}

export function loadDarkModeValue() {
    const savedModeDarkValue = localStorage.getItem('darkModeValue')
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return savedModeDarkValue ? JSON.parse(savedModeDarkValue) : true
}