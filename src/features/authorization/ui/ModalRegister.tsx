import {useRegisterModal} from "../model/store/register-store";

/* Shared */
import {Modal} from "../../../shared/components/Modal";
import {Button} from "../../../shared/components/Button";
import {Hint} from "../../../shared/components/Hint";
import {Input} from "../../../shared/components/Input";
import {Label} from "../../../shared/components/Label";
import {useLoginModal} from "../model/store/login-store.ts";

export const ModalRegister = () => {
    const isOpen = useRegisterModal((s) => s.isOpen)
    const fnCloseRegister = useRegisterModal((s) => s.close)
    const fnOpenLogin = useLoginModal((s) => s.open)

    if (!isOpen) return null

    return (
        <Modal
            isOpen={isOpen}
            onClose={fnCloseRegister}
        >
            <section className="w-full flex items-center justify-cente animate-fade-in">
                <div className="w-full max-w-[560px] flex-1">
                    <h1 className="text-2xl font-semibold text-center mb-6 px-5">
                        Creează-ți contul
                    </h1>

                    <form
                        className="group data-[status=error]:* w-full flex flex-col gap-4 sm:gap-5"
                    >
                        {/* Name input */}
                        <div className="flex flex-col gap-1">
                            <Label htmlFor={"name"}>Name:</Label>
                            <Input
                                name={"name"}
                                size={"medium"}
                                variant={"secondary"}
                                placeholder={"Nume complet"}
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
                            Register
                        </Button>
                    </form>

                    {/* Link spre login */}
                    <p className="text-center text-sm mt-4 text-muted-foreground">
                        Ai deja un cont?{" "}
                        <button
                            className="text-primary font-medium hover:underline transition-colors"
                            onClick={() => {
                                fnCloseRegister()
                                fnOpenLogin()
                            }}
                        >
                            Autentifică-te aici
                        </button>
                    </p>
                </div>
            </section>
        </Modal>
    )
}