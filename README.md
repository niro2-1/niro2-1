## Dark Mode Toggle

To enable dark mode, users can toggle the switch located in the settings menu. This will change the theme of the application to a darker color palette, reducing eye strain in low-light environments. The preference is saved in local storage, so it persists across sessions.

### Behavior
- **Default State**: Light mode is enabled by default.
- **Toggle Action**: Clicking the toggle switch will immediately switch the theme.
- **Persistence**: The selected mode will be remembered on subsequent visits.

### Code Example
```javascript
// Example of toggling dark mode
const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
};
```
