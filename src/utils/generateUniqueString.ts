export const generateUniqueString = (length = 16) => {
    if (window.crypto && window.crypto.getRandomValues) {
        // Secure random generation using crypto
        const array = new Uint8Array(length);
        window.crypto.getRandomValues(array);
        return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    } else {
        // Fallback to a less secure but functional random string generation
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor((performance.now() % 1) * chars.length);
            result += chars[randomIndex];
        }
        return result;
    }
}