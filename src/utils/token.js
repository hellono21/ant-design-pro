const TOKEN_KEY = 'antd-pro-token';
export default {
    save(token) {
        sessionStorage.setItem(TOKEN_KEY, JSON.stringify(token));
    },
    get() {
        const tokenStr = sessionStorage.getItem(TOKEN_KEY);
        return JSON.parse(tokenStr);
    },
    remove() {
        sessionStorage.removeItem(TOKEN_KEY);
    },
};