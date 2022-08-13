import {Button, Stack, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {openDrawer, selectUI, toggleTheme} from "../../redux/features/ui/ui-slice";
import {DarkMode, LightMode, Menu} from "@mui/icons-material";
import logo from "./../../assets/images/logo/logo.png";

const MobileHeader = () => {

    const dispatch = useDispatch();
    const {themeVariant} = useSelector(selectUI);

    return (
        <Toolbar variant="regular">
            <Stack sx={{width: '100%'}} justifyContent="space-between" alignItems="center" direction="row">
                <Stack justifyContent="space-between" alignItems="center" direction="row">
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <img
                            src={logo}
                            alt=""
                            style={{width: 50, height: 50, objectFit: 'cover', objectPosition: 'center'}}
                        />
                    </Link>
                </Stack>
                <Stack spacing={1} justifyContent="space-between" alignItems="center" direction="row">
                    <Link to='/auth/login' style={{textDecoration: 'none'}}>
                        <Button
                            size="small"
                            variant="outlined"
                            color="secondary"
                            sx={{
                                borderWidth: 2,
                                backgroundColor: 'light.secondary',
                                borderBottomRightRadius: 4,
                                borderTopRightRadius: 16,
                                borderBottomLeftRadius: 16,
                                borderTopLeftRadius: 4,
                                textTransform: 'capitalize'
                            }}>
                            Login
                        </Button>
                    </Link>
                    <Link to='/auth/login' style={{textDecoration: 'none'}}>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            disableElevation={true}
                            sx={{
                                borderBottomRightRadius: 4,
                                borderTopRightRadius: 16,
                                borderBottomLeftRadius: 16,
                                borderTopLeftRadius: 4,
                                textTransform: 'capitalize'
                            }}>
                            Register
                        </Button>
                    </Link>
                    <Menu
                        color="secondary"
                        sx={{
                            backgroundColor: 'light.secondary',
                            borderBottomRightRadius: 4,
                            borderTopRightRadius: 8,
                            borderBottomLeftRadius: 8,
                            borderTopLeftRadius: 4,
                            padding: 0.4,
                            fontSize: 32,
                            cursor: 'pointer'
                        }}
                        onClick={() => dispatch(openDrawer())}
                    />

                    {themeVariant === 'dark' ? (
                        <LightMode
                            color="secondary"
                            sx={{
                                backgroundColor: 'light.secondary',
                                borderBottomRightRadius: 4,
                                borderTopRightRadius: 8,
                                borderBottomLeftRadius: 8,
                                borderTopLeftRadius: 4,
                                padding: 0.4,
                                fontSize: 32,
                                cursor: 'pointer'
                            }}
                            onClick={() => dispatch(toggleTheme())}
                        />
                    ) : (
                        <DarkMode
                            color="secondary"
                            sx={{
                                backgroundColor: 'light.secondary',
                                borderBottomRightRadius: 4,
                                borderTopRightRadius: 8,
                                borderBottomLeftRadius: 8,
                                borderTopLeftRadius: 4,
                                padding: 0.4,
                                fontSize: 32
                            }}
                            onClick={() => dispatch(toggleTheme())}
                        />
                    )}
                </Stack>
            </Stack>
        </Toolbar>
    )
}

export default MobileHeader;
