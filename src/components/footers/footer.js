import {Box, Container, Divider, Typography} from "@mui/material";
import MobileFooter from "./mobile-footer";
import DesktopFooter from "./desktop-footer";

const Footer = () => {
    return (
        <Box>
            <Box sx={{display: {xs: 'none', lg: 'block'}}}>
                <DesktopFooter/>
            </Box>
            <Box sx={{display: {xs: 'block', lg: 'none'}}}>
                <MobileFooter/>
            </Box>
            <Divider variant="middle"/>
            <Box sx={{paddingY: 2}}>
                <Container>
                    <Typography sx={{color: 'text.secondary'}} align="center">
                        Tribute &copy; 2022 - All rights reserved.
                    </Typography>
                </Container>
            </Box>
        </Box>
    )
}
export default Footer;
