import type {components} from "../../../../shared/api/schema";

export type MeResponse = components['schemas']["AuthResponse"]

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
