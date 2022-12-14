import {Button, Container, Menu, MenuItem, Stack, Toolbar} from "@mui/material";
import {Link, useLocation} from "react-router-dom";
import {DarkMode, KeyboardArrowDown, KeyboardArrowUp, LightMode} from "@mui/icons-material";
import NavLink from "../shared/nav-link";
import {useState} from "react";
import logo from "./../../assets/images/logo/logo.png";
import {useDispatch, useSelector} from "react-redux";
import {selectUI, toggleTheme} from "../../redux/features/ui/ui-slice";

const DesktopHeader = () => {

    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const {themeVariant} = useSelector(selectUI);

    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = event => {
        setAnchorEl(event.currentTarget);
        setMenuOpen(true);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMenuOpen(false);
    }

    return (
        <Toolbar variant="regular">
            <Container maxWidth="xl">
                <Stack justifyContent="space-between" alignItems="center" direction="row">
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
                        <NavLink path="/" label="Home" active={pathname === '/'}/>
                        <Button
                            onClick={handleMenuOpen}
                            size="large"
                            variant="text"
                            endIcon={menuOpen ? <KeyboardArrowDown/> : <KeyboardArrowUp/>}
                            sx={{
                                borderBottomRightRadius: 0,
                                borderTopRightRadius: 12,
                                borderBottomLeftRadius: 12,
                                borderTopLeftRadius: 0,
                                color: pathname.includes('medallion') ? 'text.active' : 'text.inactive',
                                backgroundColor: pathname.includes('medallion') ? 'light.active' : false,
                                textTransform: 'capitalize',
                            }}>
                            Medallions
                        </Button>
                        <NavLink path="/features" label="Features" active={pathname === '/features'}/>
                        <NavLink path="/stories" label="Stories" active={pathname === '/stories'}/>
                        <NavLink path="/help-center" label="Help Center" active={pathname === '/help-center'}/>
                        <NavLink path="/about" label="About" active={pathname === '/about'}/>
                        <NavLink path="/contact" label="Contact" active={pathname === '/contact'}/>
                        <Menu
                            open={menuOpen}
                            anchorEl={anchorEl}
                            onClose={handleMenuClose}
                            elevation={1}
                            autoFocus={true}>
                            <MenuItem>
                                <NavLink
                                    path="/medallion/overview"
                                    label="Overview"
                                    active={pathname === '/medallion/overview'}
                                />
                            </MenuItem>
                            <MenuItem>
                                <NavLink
                                    path="/medallion/features"
                                    label="Features"
                                    active={pathname === '/medallion/features'}
                                />
                            </MenuItem>
                        </Menu>
                    </Stack>
                    <Stack spacing={1} justifyContent="space-between" alignItems="center" direction="row">
                        <Link to='/auth/login' style={{textDecoration: 'none'}}>
                            <Button
                                size="medium"
                                variant="outlined"
                                color="secondary"
                                sx={{
                                    borderWidth: 2,
                                    backgroundColor: 'light.active',
                                    borderBottomRightRadius: 0,
                                    borderTopRightRadius: 12,
                                    borderBottomLeftRadius: 12,
                                    borderTopLeftRadius: 0,
                                    textTransform: 'capitalize',
                                    borderColor: 'text.active',
                                    color: 'text.active'
                                }}>
                                Login
                            </Button>
                        </Link>
                        <Link to='/auth/login' style={{textDecoration: 'none'}}>
                            <Button
                                variant="contained"
                                color="secondary"
                                size="medium"
                                disableElevation={true}
                                sx={{
                                    borderBottomRightRadius: 0,
                                    borderTopRightRadius: 12,
                                    borderBottomLeftRadius: 12,
                                    borderTopLeftRadius: 0,
                                    textTransform: 'capitalize',
                                }}>
                                Register
                            </Button>
                        </Link>
                        {themeVariant === 'dark' ? (
                            <LightMode
                                color="secondary"
                                sx={{
                                    backgroundColor: 'light.active',
                                    borderBottomRightRadius: 0,
                                    borderTopRightRadius: 12,
                                    borderBottomLeftRadius: 12,
                                    borderTopLeftRadius: 0,
                                    padding: 0.4,
                                    fontSize: 32,
                                    color: 'white'
                                }}
                                onClick={() => dispatch(toggleTheme())}
                            />
                        ) : (
                            <DarkMode
                                sx={{
                                    backgroundColor: 'light.active',
                                    borderBottomRightRadius: 0,
                                    borderTopRightRadius: 12,
                                    borderBottomLeftRadius: 12,
                                    borderTopLeftRadius: 0,
                                    padding: 0.4,
                                    fontSize: 32,
                                    cursor: 'pointer',
                                    color: 'white'
                                }}
                                onClick={() => dispatch(toggleTheme())}
                            />
                        )}
                    </Stack>
                </Stack>
            </Container>
        </Toolbar>
    )
}

export default DesktopHeader;
