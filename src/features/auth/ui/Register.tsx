import {useRegisterForm} from "../model/hooks/useRegisterForm.ts";

export const Register = () => {
    const [state, dispatch, submit] = useRegisterForm()
    return (
       <div className="flex items-center justify-center">
           <form action="" className="flex flex-col gap-2 w-[500px]">
               <input
                   type="text"
                   placeholder="name"
                   value={state.name}
                   onChange={(e) =>
                       dispatch({ type: "change-name", payload: e.target.value })
                   }
               />
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
