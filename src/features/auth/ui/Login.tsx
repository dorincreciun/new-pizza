import {Input} from "../../../shared/components/Input";
import {Hint} from "../../../shared/components/Hint";
import {Label} from "../../../shared/components/Label";
import {Button} from "../../../shared/components/Button";
import {useLoginForm} from "../model/hooks/useLoginForm.ts";
import {useAuthModalStore} from "../../../widgets/ModalAuth";

export const Login = () => {
    const [state, dispatch, submit, isError] = useLoginForm()
    const showRegisterModal = useAuthModalStore((s) => s.onOpen)

    return (
        <section className="w-full flex items-center justify-center animate-fade-in">
            <div className="w-full max-w-[560px] flex-1">
                <h1 className="text-2xl font-semibold text-center mb-6 px-5">
                    Autentifică-te în contul tău
                </h1>

                <form
                    {...(isError ? { "data-status": "error" } : {})}
                    className="group data-[status=error]:* w-full flex flex-col gap-4 sm:gap-5"
                    onSubmit={(e) => {
                        e.preventDefault()
                        void submit()
                    }}
                >

                    {/* Email input */}
                    <div className="flex flex-col gap-1">
                        <Label htmlFor={"email"}>Email:</Label>
                        <Input
                            type={"email"}
                            name={"email"}
                            size={"medium"}
                            variant={"secondary"}
                            placeholder={"exemple@gmail.com"}
                            autoComplete="email"
                            inputMode="email"
                            value={state.email}
                            onChange={(e) => {
                                dispatch({
                                    type: "change-email",
                                    email: e.target.value
                                })
                            }}
                        />
                    </div>

                    {/* Password input */}
                    <div className="flex flex-col gap-1">
                        <Label htmlFor={"password"}>Password:</Label>
                        <Input
                            type={"password"}
                            name={"password"}
                            size={"medium"}
                            variant={"secondary"}
                            placeholder={"Password"}
                            autoComplete="new-password"
                            value={state.password}
                            onChange={(e) => {
                                dispatch({
                                    type: "change-password",
                                    password: e.target.value
                                })
                            }}
                        />
                    </div>

                    {/* Error message */}
                    <Hint>
                        Autentificarea a eșuat.
                        <br/>
                        – Poate că tokenul a expirat sau serverul nu a putut valida acreditările.
                        <br/>
                        – Mai încearcă o dată.
                    </Hint>

                    {/* Submit button */}
                    <Button
                        type="submit"
                        className="w-full max-w-[200px] mx-auto"
                    >
                        Login
                    </Button>
                </form>

                {/* Link spre register */}
                <p className="text-center text-sm mt-4 text-muted-foreground">
                    Nu ai un cont?{" "}
                    <button
                        onClick={() => showRegisterModal("register")}
                        className="text-primary font-medium hover:underline transition-colors"
                    >
                        Creează-ți unul acum
                    </button>
                </p>

            </div>
        </section>
    )
}
