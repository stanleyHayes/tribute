import {Avatar, Badge, Button, Container, Menu, MenuItem, Stack, Toolbar, Typography} from "@mui/material";
import {Link, useLocation} from "react-router-dom";
import {
    DarkMode,
    FavoriteBorderOutlined,
    KeyboardArrowDown,
    KeyboardArrowUp,
    LightMode,
    Settings,
    ShoppingBagOutlined
} from "@mui/icons-material";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectUI, toggleTheme} from "../../../redux/features/ui/ui-slice";
import NavLink from "../../shared/nav-link";
import {selectAuth} from "../../../redux/features/auth/auth-slice";
import {UTILS} from "../../../utils/utils";
import {CART_ACTION_CREATORS, selectCart} from "../../../redux/features/cart/cart-slice";

const AuthDesktopHeader = () => {

    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const {themeVariant} = useSelector(selectUI);
    const {authData} = useSelector(selectAuth)

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
            variant="regular"
            sx={{
                borderBottomWidth: 1,
                borderBottomStyle: 'dashed',
                borderBottomColor: 'divider'
            }}>
            <Container maxWidth="xl">
                <Stack spacing={2} justifyContent="flex-end" alignItems="center" direction="row">
                    <Button
                        startIcon={
                            <Avatar sx={{
                                borderBottomRightRadius: 4,
                                borderTopRightRadius: 8,
                                borderBottomLeftRadius: 8,
                                borderTopLeftRadius: 4,
                                backgroundColor: 'light.secondary'
                            }}>
                                <Typography
                                    variant="h5"
                                    sx={{textTransform: 'uppercase', color: 'secondary.main'}}>
                                    {authData && UTILS.getInitials(authData?.fullName)}
                                </Typography>
                            </Avatar>
                        }
                        onClick={handleMenuOpen}
                        size="small"
                        variant="text"
                        endIcon={menuOpen ? <KeyboardArrowDown/> : <KeyboardArrowUp/>}
                        sx={{
                            borderBottomRightRadius: 4,
                            borderTopRightRadius: 8,
                            borderBottomLeftRadius: 8,
                            borderTopLeftRadius: 4,
                            color: 'secondary.main',
                            textTransform: 'capitalize',
                        }}>
                        {authData?.fullName}
                    </Button>

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
                                    fontSize: 28,
                                    color: 'secondary.main',
                                    cursor: 'pointer'
                                }}
                            />
                        </Link>
                    </Badge>
                    <Badge color="secondary" badgeContent={999} variant="dot" max={10}>
                        <Link to='/wishlist' style={{textDecoration: 'none'}}>
                            <FavoriteBorderOutlined
                                color="secondary"
                                sx={{
                                    backgroundColor: 'light.secondary',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 12,
                                    borderBottomLeftRadius: 12,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 28,
                                    color: 'secondary.main',
                                    cursor: 'pointer'
                                }}
                            />
                        </Link>
                    </Badge>
                    <Link to='/settings' style={{textDecoration: 'none'}}>
                        <Settings
                            color="secondary"
                            sx={{
                                backgroundColor: 'light.secondary',
                                borderBottomRightRadius: 4,
                                borderTopRightRadius: 12,
                                borderBottomLeftRadius: 12,
                                borderTopLeftRadius: 4,
                                padding: 0.4,
                                fontSize: 32,
                                cursor: 'pointer'
                            }}
                        />
                    </Link>
                    {themeVariant === 'dark' ? (
                        <LightMode
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
                            onClick={() => dispatch(toggleTheme())}
                        />
                    ) : (
                        <DarkMode
                            sx={{
                                backgroundColor: 'light.secondary',
                                borderBottomRightRadius: 4,
                                borderTopRightRadius: 12,
                                borderBottomLeftRadius: 12,
                                borderTopLeftRadius: 4,
                                padding: 0.4,
                                fontSize: 32,
                                cursor: 'pointer',
                                color: 'secondary.main'
                            }}
                            onClick={() => dispatch(toggleTheme())}
                        />
                    )}
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
            </Container>
        </Toolbar>
    )
}

export default AuthDesktopHeader;
