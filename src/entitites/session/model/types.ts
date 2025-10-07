import type {paths} from "../../../shared/api/schema";

export type MeResponse = paths['/auth/me']['get']['responses']['200']['content']['application/json']
export type MeError = paths['/auth/me']['get']['responses']['401']['content']['application/json']

export interface ISession {
    active: boolean;
    email: string | null;
    name: string | null;
}

interface StoreActions {
    initSession: () => Promise<void>;
    clearSession: () => void;
    setSession: (session: Partial<ISession>) => void;
}

export type SessionStore = ISession & StoreActions