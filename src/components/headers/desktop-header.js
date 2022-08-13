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
                                borderBottomRightRadius: 4,
                                borderTopRightRadius: 16,
                                borderBottomLeftRadius: 16,
                                borderTopLeftRadius: 4,
                                color: pathname.includes('medallion') ? 'secondary.main' : 'text.secondary',
                                backgroundColor: pathname.includes('medallion') ? 'light.secondary' : false,
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
                                    textTransform: 'capitalize',
                                }}>
                                Register
                            </Button>
                        </Link>
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
                                    fontSize: 32
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
                                    fontSize: 32,
                                    cursor: 'pointer'
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
