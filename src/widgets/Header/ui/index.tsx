import {HeaderWrapper} from "./HeaderWrapper.tsx";
import {HeaderActions} from "./HeaderActions.tsx";
import {HeaderLogo} from "./HeaderLogo.tsx";

export const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderLogo />
            <HeaderActions />
        </HeaderWrapper>
    )
}
