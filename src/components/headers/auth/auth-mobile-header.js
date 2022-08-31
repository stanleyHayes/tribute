import {Badge, Box, Button, Menu, MenuItem, Stack, Toolbar} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {DarkMode, LightMode, Menu as MUIIcon, MoreHoriz, ShoppingBagOutlined} from "@mui/icons-material";
import {openDrawer, selectUI, toggleTheme} from "../../../redux/features/ui/ui-slice";
import {Link, useLocation} from "react-router-dom";
import NavLink from "../../shared/nav-link";
import {useState} from "react";
import {CART_ACTION_CREATORS, selectCart} from "../../../redux/features/cart/cart-slice";

const AuthMobileHeader = () => {

    const dispatch = useDispatch();
    const {themeVariant} = useSelector(selectUI);
    const {pathname} = useLocation();

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

    const {items} = useSelector(selectCart);

    return (
        <Toolbar
            sx={{
                borderBottomWidth: 1,
                borderBottomStyle: 'dashed',
                borderBottomColor: 'divider'
            }}
            variant="regular">
            <Stack
                sx={{width: '100%'}}
                justifyContent="space-between"
                alignItems="center"
                direction="row">
                <Box>
                    <MUIIcon
                        sx={{
                            backgroundColor: 'light.secondary',
                            borderBottomRightRadius: 4,
                            borderTopRightRadius: 8,
                            borderBottomLeftRadius: 8,
                            borderTopLeftRadius: 4,
                            padding: 0.4,
                            fontSize: 32,
                            cursor: 'pointer',
                            color: 'secondary.main',
                        }}
                        onClick={() => dispatch(openDrawer())}
                    />
                </Box>
                <Stack spacing={1} alignItems="center" direction="row">
                    <Badge color="secondary" badgeContent={CART_ACTION_CREATORS.calculateTotalQuantity(items)} variant="standard" max={100}>
                        <Link to='/cart' style={{textDecoration: 'none'}}>
                            <ShoppingBagOutlined
                                color="secondary"
                                sx={{
                                    backgroundColor: 'light.secondary',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 12,
                                    borderBottomLeftRadius: 12,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 32,
                                    color: 'secondary.main',
                                    cursor: 'pointer'
                                }}
                            />
                        </Link>
                    </Badge>
                    {themeVariant === 'dark' ? (
                        <LightMode
                            sx={{
                                backgroundColor: 'light.secondary',
                                borderBottomRightRadius: 4,
                                borderTopRightRadius: 8,
                                borderBottomLeftRadius: 8,
                                borderTopLeftRadius: 4,
                                padding: 0.4,
                                fontSize: 32,
                                cursor: 'pointer',
                                color: 'secondary.main'
                            }}
                            onClick={() => dispatch(toggleTheme())}
                        />
                    ) : (
                        <DarkMode
                            sx={{
                                backgroundColor: 'light.secondary',
                                borderBottomRightRadius: 4,
                                borderTopRightRadius: 8,
                                borderBottomLeftRadius: 8,
                                borderTopLeftRadius: 4,
                                padding: 0.4,
                                fontSize: 32,
                                color: 'secondary.main'
                            }}
                            onClick={() => dispatch(toggleTheme())}
                        />
                    )}
                    <MoreHoriz
                        onClick={handleMenuOpen}
                        sx={{
                            backgroundColor: 'light.secondary',
                            borderBottomRightRadius: 0,
                            borderTopRightRadius: 12,
                            borderBottomLeftRadius: 12,
                            borderTopLeftRadius: 0,
                            padding: 0.4,
                            fontSize: 32,
                            cursor: 'pointer',
                            color: 'secondary.main'
                        }}
                    />

                    <Menu
                        open={menuOpen}
                        anchorEl={anchorEl}
                        onClose={handleMenuClose}
                        elevation={1}
                        autoFocus={true}>
                        <MenuItem>
                            <NavLink
                                path="/profile"
                                label="Profile"
                                active={pathname === '/profile'}
                            />
                        </MenuItem>
                        <MenuItem>
                            <NavLink
                                path="/wishlist"
                                label="Wishlist"
                                active={pathname === '/wishlist'}
                            />
                        </MenuItem>
                        <MenuItem>
                            <NavLink
                                path="/settings"
                                label="Settings"
                                active={pathname === '/settings'}
                            />
                        </MenuItem>
                        <MenuItem>
                            <NavLink
                                path="/change-password"
                                label="Overview"
                                active={pathname === '/change-password'}
                            />
                        </MenuItem>
                        <MenuItem>
                            <Button
                                sx={{
                                    textTransform: 'capitalize',
                                    color: 'text.secondary',
                                }} size="large">
                                Logout
                            </Button>
                        </MenuItem>
                    </Menu>
                </Stack>
            </Stack>
        </Toolbar>
    )
}

export default AuthMobileHeader;
