import type {paths} from "../../../../shared/api/schema";

export type MeResponse = paths['/auth/me']['get']['responses']['200']['content']['application/json']

interface SessionState  {
    readonly active: boolean;
    readonly data: MeResponse | null;
}

interface StoreActions {
    initSession: () => void;
    createSession: (data: Partial<SessionState>) => void;
    destroySession: () => void;
}
export type SessionStore = SessionState  & StoreActions
