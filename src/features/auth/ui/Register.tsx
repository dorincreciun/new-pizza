import {Label} from "../../../shared/components/Label";
import {Input} from "../../../shared/components/Input";
import {Hint} from "../../../shared/components/Hint";
import {Button} from "../../../shared/components/Button";
import {useRegisterForm} from "../model/hooks/useRegisterForm.ts";
import {useAuthModalStore} from "../../../widgets/AuthModal";

export const Register = () => {
    const [state, dispatch, submit, isError] = useRegisterForm()
    const showLoginModal = useAuthModalStore((s) => s.onOpen)

    return (
        <section className="w-full flex items-center justify-cente animate-fade-in">
            <div className="w-full max-w-[560px] flex-1">
                <h1 className="text-2xl font-semibold text-center mb-6">
                    Creează-ți contul
                </h1>

                <form
                    {...(isError ? {"data-status": "error"} : {})}
                    className="group data-[status=error]:* w-full flex flex-col gap-4 sm:gap-5"
                    onSubmit={(e) => {
                        e.preventDefault()
                        void submit()
                    }}
                >
                    {/* Name input */}
                    <div className="flex flex-col gap-1">
                        <Label htmlFor={"name"}>Name:</Label>
                        <Input
                            name={"name"}
                            size={"medium"}
                            variant={"secondary"}
                            placeholder={"Nume complet"}
                            value={state.name}
                            onChange={(e) =>
                                dispatch({
                                    type: "change-name",
                                    name: e.target.value,
                                })
                            }
                            autoComplete="name"
                        />
                    </div>

                    {/* Email input */}
                    <div className="flex flex-col gap-1">
                        <Label htmlFor={"email"}>Email:</Label>
                        <Input
                            type={"email"}
                            name={"email"}
                            size={"medium"}
                            variant={"secondary"}
                            placeholder={"exemple@gmail.com"}
                            value={state.email}
                            onChange={(e) =>
                                dispatch({
                                    type: "change-email",
                                    email: e.target.value,
                                })
                            }
                            autoComplete="email"
                            inputMode="email"
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
                            value={state.password}
                            onChange={(e) =>
                                dispatch({
                                    type: "change-password",
                                    password: e.target.value,
                                })
                            }
                            autoComplete="new-password"
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
                        Register
                    </Button>
                </form>

                {/* Link spre login */}
                <p className="text-center text-sm mt-4 text-muted-foreground">
                    Ai deja un cont?{" "}
                    <button
                        onClick={() => showLoginModal("login")}
                        className="text-primary font-medium hover:underline transition-colors"
                    >
                        Autentifică-te aici
                    </button>
                </p>
            </div>
        </section>
    );
};
