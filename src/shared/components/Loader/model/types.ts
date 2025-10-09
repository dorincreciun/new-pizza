export interface LoaderStore {
    activeRequests: number;
    isLoading: boolean;
    startLoading: () => void;
    stopLoading: () => void;
}