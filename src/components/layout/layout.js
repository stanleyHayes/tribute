import {Box, SwipeableDrawer} from "@mui/material";
import Footer from "../footers/footer";
import Header from "../headers/header";
import MobileSidebar from "../sidebar/mobile-sidebar";
import {closeDrawer, openDrawer, selectUI} from "../../redux/features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";

const Layout = ({children}) => {
    const dispatch = useDispatch();
    const {drawerOpen} = useSelector(selectUI);

    return (
        <Box>
            <Box sx={{minHeight: '100vh', backgroundColor: 'background.default'}}>
                <Box>
                    <Header/>
                </Box>
                <Box sx={{flexGrow: 1}}>
                    {children}
                </Box>
                <Box>
                    <Footer/>
                </Box>
            </Box>

            <SwipeableDrawer
                onClose={() => dispatch(closeDrawer())}
                onOpen={() => dispatch(openDrawer())}
                open={drawerOpen}>
                <MobileSidebar/>
            </SwipeableDrawer>
        </Box>
    )
}

export default Layout;
