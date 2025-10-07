export const Login = () => {
    return (
        <div className="flex items-center justify-center">
            <form action="" className="flex flex-col gap-2 w-[500px]">
                <input type="email" placeholder={"email"} />
                <input type="password" placeholder={"password"} />
                <button type={"button"}>Submit</button>
            </form>
        </div>
    )
}