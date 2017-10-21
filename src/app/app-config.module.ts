import { CustomConfig } from 'ng2-ui-auth';

// export const GOOGLE_CLIENT_ID = '******************************.apps.googleusercontent.com';
export class AuthConfig extends CustomConfig {
    authToken  = '';
    baseUrl    = 'http://localhost:8080/';
    refreshUrl = 'http://localhost:8080/auth/refresh';
    defaultHeaders   = { 'Content-Type': 'application/json' };
    autoRefreshToken = true;
    // providers = { google: { clientId: GOOGLE_CLIENT_ID } };
}


export class AppSettings {
    public static API_ENDPOINT          = 'http://localhost:8080';
    public static API_SIGNUP            = 'http://localhost:8080/auth/signup/';
    public static API_RESET_PASSWORD    = 'http://localhost:8080/reset/password/';
    public static API_POSTS             = 'http://localhost:8080/posts/';
    public static API_USER_PROFILE      = 'http://localhost:8080/user/profile';
    public static API_CHANGE_PASSWORD   = 'http://localhost:8080/user/change-password';
    public static API_MANAGE_USERS      = 'http://localhost:8080/management/users/';
    public static API_MANAGE_POSTS      = 'http://localhost:8080/management/posts/';
    public static API_MANAGE_TAGS       = 'http://localhost:8080/management/tags/';
}
