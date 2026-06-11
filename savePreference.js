// Code to save preferences in localStorage
function savePreference(key, value) {
    localStorage.setItem(key, value);
}

// Example usage
savePreference('theme', 'dark');