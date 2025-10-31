import type {ApiUser} from "../../../../shared/types/global";

interface SessionState {
    active: boolean;
    data: ApiUser | null;
}

interface SessionActions {
    createSession: (data: ApiUser) => void;
    destroySession: () => void;
}

export type SessionStore = SessionState & SessionActions