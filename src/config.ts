export default {
    BACKEND_SCHEME: 'https',
    BACKEND: 'api.jsonbin.io',
    TARGET: '/b/5f3a5150b88c04101cf58b8a',
    TIMEOUT: 20,
};

export interface configType {
    BACKEND_SCHEME: string;
    BACKEND: string;
    TARGET: string;
    TIMEOUT: number;
}
