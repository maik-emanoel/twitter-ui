export function saveDarkModeValue(value: boolean | null) {
    localStorage.setItem('lightModeValue', JSON.stringify(value))
}

export function loadDarkModeValue() {
    const savedModeDarkValue = localStorage.getItem('lightModeValue')
    return savedModeDarkValue ? JSON.parse(savedModeDarkValue) as boolean : true
}