export default {
    BACKEND_SCHEME: 'https',
    BACKEND: 'dummy.backend.com',
    APPENDIX: '?api_key=',
    API_KEY: 'r4nd0mAp!k3Y',
    TIMEOUT: 20,
};

export interface configType {
    BACKEND_SCHEME: string;
    BACKEND: string;
    APPENDIX: string;
    API_KEY: string;
    TIMEOUT: number;
}
