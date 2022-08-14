import {AppBar, Box} from "@mui/material";
import MobileHeader from "./mobile-header";
import DesktopHeader from "./desktop-header";
import {useEffect, useState} from "react";

const Header = () => {
    const [appBarColor, setAppBarColor] = useState('transparent');
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= window.innerHeight) {
                setAppBarColor('background.appBar');
            }else{
                setAppBarColor('transparent');
            }
        });
    });

    return (
        <AppBar sx={{backgroundColor: appBarColor, backdropFilter: 'blur(3px)'}} elevation={0}>
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
