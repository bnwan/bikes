const stateKey = 'user-preference-state';

export const loadUserState = () => {
    try {
        let userState = localStorage.getItem(stateKey);
        if (userState === null) {
            return undefined;
        }
        return JSON.parse(userState);
    } catch (err) {
        return undefined;
    }
};

export const saveUserState = (userState) => {
    try {
        serializedUserState = JSON.stringify(userState);
        localStorage.setItem(stateKey, serializedUserState);
    } catch (err) {
        // log errors
    }
};