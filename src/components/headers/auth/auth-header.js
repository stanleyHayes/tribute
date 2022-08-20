import {Box} from "@mui/material";
import AuthDesktopHeader from "./auth-desktop-header";
import AuthMobileHeader from "./auth-mobile-header";

const AuthHeader = () => {

    return (
        <Box>
            <Box sx={{display: {xs: 'none', lg: 'block'}}}>
                <AuthDesktopHeader/>
            </Box>
            <Box sx={{display: {xs: 'block', lg: 'none'}}}>
                <AuthMobileHeader/>
            </Box>
        </Box>
    )
}

export default AuthHeader;
