import {Box, Button, Container, Stack} from "@mui/material";
import {useLocation} from "react-router";
import {
    Dashboard,
    DashboardOutlined,
    Face,
    FaceOutlined,
    Favorite,
    FavoriteBorder,
    Inventory,
    InventoryOutlined,
    LogoutOutlined,
    Settings,
    SettingsOutlined,
    ShoppingBag,
    ShoppingBagOutlined,
    ViewCarousel,
    ViewCarouselOutlined
} from "@mui/icons-material";
import SidebarNavLink from "../shared/sidebar-nav-link";

const AuthSidebar = () => {

    const {pathname} = useLocation();

    return (
        <Box sx={{py: 2}}>
            <Container>
                <Stack direction="column" spacing={2}>
                    <SidebarNavLink
                        icon={pathname === '/dashboard' ?
                            <Dashboard sx={{color: 'secondary.main', fontSize: 24}}/> :
                            <DashboardOutlined sx={{color: 'text.secondary', fontSize: 24}}/>}
                        active={pathname === '/dashboard'} label="Dashboard" path="/dashboard"
                    />

                    <SidebarNavLink
                        icon={pathname === '/stories' ?
                            <ViewCarousel sx={{color: 'secondary.main', fontSize: 24}}/> :
                            <ViewCarouselOutlined sx={{color: 'text.secondary', fontSize: 24}}/>}
                        active={pathname === '/stories'} label="Stories" path="/stories"
                    />

                    <SidebarNavLink
                        icon={pathname === '/products' ?
                            <Inventory sx={{color: 'secondary.main', fontSize: 24}}/> :
                            <InventoryOutlined sx={{color: 'text.secondary', fontSize: 24}}/>}
                        active={pathname === '/products'} label="Buy a medallion" path="/products"
                    />

                    <SidebarNavLink
                        icon={pathname === '/orders' ?
                            <ShoppingBag sx={{color: 'secondary.main', fontSize: 24}}/> :
                            <ShoppingBagOutlined sx={{color: 'text.secondary', fontSize: 24}}/>}
                        active={pathname === '/orders'} label="Orders" path="/orders"
                    />

                    <SidebarNavLink
                        icon={pathname === '/profile' ?
                            <Face sx={{color: 'secondary.main', fontSize: 24}}/> :
                            <FaceOutlined sx={{color: 'text.secondary', fontSize: 24}}/>}
                        active={pathname === '/profile'} label="Profile" path="/profile"
                    />

                    <SidebarNavLink
                        icon={pathname === '/settings' ?
                            <Settings sx={{color: 'secondary.main', fontSize: 24}}/> :
                            <SettingsOutlined sx={{color: 'text.secondary', fontSize: 24}}/>}
                        active={pathname === '/settings'} label="Settings" path="/settings"
                    />

                    <SidebarNavLink
                        icon={pathname === '/wishlist' ?
                            <Favorite sx={{color: 'secondary.main', fontSize: 24}}/> :
                            <FavoriteBorder sx={{color: 'text.secondary', fontSize: 24}}/>}
                        active={pathname === '/wishlist'} label="Wishlist" path="/wishlist"
                    />

                    <Stack
                        sx={{padding: 0.5, borderRadius: 8, pl: 2}}
                        direction="row" alignItems="center" spacing={2}>
                        <LogoutOutlined/>
                        <Button
                            sx={{
                                textTransform: 'capitalize',
                                color: 'text.secondary',
                            }} size="small">
                            Logout
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

export default AuthSidebar;
