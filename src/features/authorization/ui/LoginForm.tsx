/* Shared */
import {Button} from "../../../shared/components/Button";
import {Hint} from "../../../shared/components/Hint";
import {Label} from "../../../shared/components/Label";
import {Input} from "../../../shared/components/Input";

/* Store */
import {useAuthModalStore} from "../model/store/useAuthModalStore";

export const LoginForm = () => {
    const open = useAuthModalStore((s) => s.open)

    return (
        <section className="w-full flex items-center justify-center animate-fade-in">
            <div className="w-full max-w-[560px] flex-1">
                <h1 className="text-2xl font-semibold text-center mb-6 px-5">
                    Autentifică-te în contul tău
                </h1>

                <form
                    className="group data-[status=error]:* w-full flex flex-col gap-4 sm:gap-5"
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
                        className="text-primary font-medium hover:underline transition-colors"
                        onClick={() => {
                            open("register")
                        }}
                    >
                        Creează-ți unul acum
                    </button>
                </p>

            </div>
        </section>
    )
}