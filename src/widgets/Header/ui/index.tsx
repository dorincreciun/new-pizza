import {useSessionStore} from "../../../entitites/session";
import {userLogout} from "../../../features/auth/api/userLogout.ts";
import {useNavigate} from "react-router";

export const Header = () => {
    const navigate = useNavigate()
    const active = useSessionStore((s) => s.active)
    return (
        <header className="py-3.5 border-b border-gray-200">
            <div className="container flex justify-between items-center">
                <span className={"text-2xl"}>Header</span>

                {
                    active
                        ? (<button onClick={userLogout}>
                            Logout
                        </button>)
                        : (<button onClick={() => navigate("/auth")}>
                            Login
                        </button>)
                }

            </div>
        </header>
    )
}
