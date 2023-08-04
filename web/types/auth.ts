export class Auth {
    token: string;
    isAuthenticated: boolean;
    email: string;
    password: string;

    constructor() {
        this.token = '';
        this.isAuthenticated = false;
    }

    // Method to set the authentication token and update the isAuthenticated field
    setAuthToken(token: string) {
        this.token = token;
        this.isAuthenticated = true;
    }

    // Method to clear the authentication token when the user logs out
    clearAuthToken() {
        this.token = '';
        this.isAuthenticated = false;
    }
}