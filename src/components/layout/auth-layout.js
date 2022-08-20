import {Box, SwipeableDrawer} from "@mui/material";
import AuthSidebar from "../sidebar/auth-sidebar";
import {useDispatch, useSelector} from "react-redux";
import {closeDrawer, openDrawer, selectUI} from "../../redux/features/ui/ui-slice";
import AuthHeader from "../headers/auth/auth-header";

const AuthLayout = ({children}) => {

    const {drawerOpen} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <Box sx={{minHeight: '100vh', backgroundColor: 'background.default'}}>
            <Box sx={{display: 'flex'}}>
                <Box sx={{
                    display: {xs: 'none', lg: 'block'},
                    flexBasis: {xs: '0%', lg: '20%', xl: '16%'}, backgroundColor: 'background.paper'}}>
                    <AuthSidebar/>
                </Box>
                <Box
                    sx={{
                        flexBasis: {xs: '100%', lg: '80%', xl: '84%'},
                        maxHeight: '100vh',
                        height: '100vh',
                        overflowY: 'scroll'
                    }}>
                    <AuthHeader/>
                    {children}
                </Box>
            </Box>

            <SwipeableDrawer
                onClose={() => dispatch(closeDrawer())}
                open={drawerOpen}
                onOpen={() => dispatch(openDrawer())}>
                <AuthSidebar/>
            </SwipeableDrawer>
        </Box>
    )
}

export default AuthLayout;
