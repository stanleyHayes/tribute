import {AppBar, Box} from "@mui/material";
import MobileHeader from "./mobile-header";
import DesktopHeader from "./desktop-header";

const Header = () => {
    return (
        <AppBar color="transparent" elevation={0}>
            <Box sx={{display: {xs: 'none', lg: 'block'}}}>
                <DesktopHeader/>
            </Box>
            <Box sx={{display: {xs: 'block', lg: 'none'}}}>
                <MobileHeader/>
            </Box>
        </AppBar>
    )
}

export default Header;
