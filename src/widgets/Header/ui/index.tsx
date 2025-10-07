import {useSessionStore} from "../../../entitites/session";
import {logout} from "../../../features/auth/api/logout.ts";

export const Header = () => {
    const state = useSessionStore((s) => s.active)
    return (
        <header className="py-3.5 border-b border-gray-200">
            <div className="container flex justify-between items-center">
                <span className={"text-2xl"}>Header</span>

                {
                    state
                        ?   (<button onClick={logout}>
                                Logout
                            </button>)
                        :   (<button>
                            Login
                            </button>)
                }

            </div>
        </header>
    )
}
