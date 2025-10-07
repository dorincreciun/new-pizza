import {useLoginForm} from "../model/hooks/useLoginForm.ts";

export const Login = () => {
    const [state, dispatch, submit] = useLoginForm()

    return (
        <div className="flex items-center justify-center">
            <form className="flex flex-col gap-2 w-[500px]">
                <input
                    type="email"
                    placeholder="email"
                    value={state.email}
                    onChange={(e) =>
                        dispatch({ type: "change-email", payload: e.target.value })
                    }
                />
                <input
                    type="password"
                    placeholder="password"
                    value={state.password}
                    onChange={(e) =>
                        dispatch({ type: "change-password", payload: e.target.value })
                    }
                />
                <button type="button" onClick={() => submit()} >
                    Reset
                </button>
            </form>
        </div>
    )
}
