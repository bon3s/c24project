export default {
    BACKEND_SCHEME: 'https',
    BACKEND: 'api.jsonbin.io',
    TARGET: '/b/5f3a5150b88c04101cf58b8a',
    TIMEOUT: 20,
    API_KEY: '$2b$10$29VNYJ2Ml3VxThVSYTrTiu4SIna0OokzTb8jTcvT8GBaPGgNrbZxW',
};

export interface configType {
    BACKEND_SCHEME: string;
    BACKEND: string;
    TARGET: string;
    TIMEOUT: number;
    API_KEY: string;
}
