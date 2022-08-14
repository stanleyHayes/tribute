import {Accordion, AccordionDetails, AccordionSummary, Box, Button, Stack} from "@mui/material";
import SidebarLink from "../shared/sidebar-link";
import {useLocation} from "react-router-dom";
import {ChevronRight, Close, DarkMode, Home, HomeOutlined, LightMode} from "@mui/icons-material";
import {closeDrawer, selectUI, toggleTheme} from "../../redux/features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";

const MobileSidebar = () => {

    const {pathname} = useLocation();
    const {themeVariant} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <Box sx={{minHeight: '100vh', minWidth: "80vw", py: 3}}>
            <Stack
                sx={{px: 4, mb: 4}}
                direction="row"
                alignItems="center"
                justifyContent="space-between">
                {themeVariant === 'light' ? (
                    <DarkMode
                        onClick={() => dispatch(toggleTheme())}
                        sx={{
                            cursor: 'pointer',
                            color: 'secondary.main',
                            borderBottomRightRadius: 4,
                            borderTopRightRadius: 16,
                            borderBottomLeftRadius: 16,
                            borderTopLeftRadius: 4,
                            padding: 1,
                            fontSize: 32,
                            backgroundColor: 'light.secondary'
                        }}/>
                ) : (
                    <LightMode
                        onClick={() => dispatch(toggleTheme())}
                        sx={{
                            cursor: 'pointer',
                            color: 'secondary.main',
                            borderBottomRightRadius: 4,
                            borderTopRightRadius: 16,
                            borderBottomLeftRadius: 16,
                            borderTopLeftRadius: 4,
                            padding: 1,
                            fontSize: 32,
                            backgroundColor: 'light.secondary'
                        }}/>
                )}

                <Close
                    onClick={() => dispatch(closeDrawer())}
                    sx={{
                        cursor: 'pointer',
                        color: 'secondary.main',
                        borderBottomRightRadius: 4,
                        borderTopRightRadius: 16,
                        borderBottomLeftRadius: 16,
                        borderTopLeftRadius: 4,
                        padding: 1,
                        fontSize: 32,
                        backgroundColor: 'light.secondary'
                    }}/>

            </Stack>

            <Stack spacing={2} direction="column">
                <SidebarLink
                    label="Home"
                    active={pathname === '/'}
                    path="/"
                    icon={
                        pathname === '/' ? (
                            <Home
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <HomeOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36
                                }}/>
                        )
                    }
                />


                <Accordion
                    sx={{width: '100%'}}
                    variant="elevation"
                    elevation={0}>
                    <AccordionSummary>
                        <Stack
                            sx={{
                                justifyContent: 'flex-start',
                                borderLeftWidth: pathname.includes('medallion') ? 3 : 0,
                                borderLeftStyle: pathname.includes('medallion') ? 'solid' : false,
                                borderLeftColor: pathname.includes('medallion') ? 'secondary.main' : false,
                                backgroundColor: pathname.includes('medallion') ? 'light.secondary' : false,
                                paddingLeft: 2,
                                width: '100%'
                            }}
                            direction="row" justifyContent="space-between" alignItems="center">
                            <Button
                                fullWidth={true}
                                startIcon={
                                    pathname.includes('medallion') && pathname.includes('medallion') ?
                                        (<Home sx={{
                                                    cursor: 'pointer',
                                                    color: 'secondary.main',
                                                    borderBottomRightRadius: 4,
                                                    borderTopRightRadius: 8,
                                                    borderBottomLeftRadius: 8,
                                                    borderTopLeftRadius: 4,
                                                    padding: 0.4,
                                                    fontSize: 36,
                                                    backgroundColor: 'light.secondary'
                                                }}/>) :
                                        (<HomeOutlined sx={{
                                                    cursor: 'pointer',
                                                    color: 'text.secondary',
                                                    borderBottomRightRadius: 4,
                                                    borderTopRightRadius: 8,
                                                    borderBottomLeftRadius: 8,
                                                    borderTopLeftRadius: 4,
                                                    padding: 0.4,
                                                    fontSize: 36
                                                }}/>)
                                }
                                size="large"
                                variant="text"
                                sx={{
                                    marginLeft: -2,
                                    borderRadius: 0,
                                    justifyContent: 'flex-start',
                                    color: pathname.includes('medallion') && pathname.includes('medallion') ? 'secondary.main' : 'text.primary',
                                    textTransform: 'capitalize',
                                }}>
                                Medallion
                            </Button>

                            <ChevronRight
                                sx={{
                                    cursor: 'pointer',
                                    color: pathname.includes('medallion') && pathname.includes('medallion') ? 'secondary.main' : 'text.primary',
                                    borderRadius: '1%',
                                    padding: 1,
                                    fontSize: 36,
                                }}/>
                        </Stack>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack direction="column" spacing={1}>
                            <SidebarLink
                                active={pathname.includes('marijuana')}
                                label="Overview"
                                path="/medallion/overview"
                                icon={pathname.includes('medallion') ?
                                    (<Home sx={{
                                                cursor: 'pointer',
                                                color: 'secondary.main',
                                                borderBottomRightRadius: 4,
                                                borderTopRightRadius: 8,
                                                borderBottomLeftRadius: 8,
                                                borderTopLeftRadius: 4,
                                                padding: 0.4,
                                                fontSize: 36,
                                                backgroundColor: 'light.secondary'
                                            }}/>
                                    ) : (<HomeOutlined sx={{
                                                cursor: 'pointer',
                                                color: 'text.secondary',
                                                borderBottomRightRadius: 4,
                                                borderTopRightRadius: 8,
                                                borderBottomLeftRadius: 8,
                                                borderTopLeftRadius: 4,
                                                padding: 0.4,
                                                fontSize: 36
                                            }}/>)
                            }
                            />
                            <SidebarLink
                                active={pathname.includes('medallion')}
                                label="Features"
                                path="/medallion/features"
                                icon={pathname.includes('medallion') ?
                                    (<Home sx={{
                                            cursor: 'pointer',
                                            color: 'secondary.main',
                                            borderBottomRightRadius: 4,
                                            borderTopRightRadius: 8,
                                            borderBottomLeftRadius: 8,
                                            borderTopLeftRadius: 4,
                                            padding: 0.4,
                                            fontSize: 36,
                                            backgroundColor: 'light.secondary'
                                        }}/>) :
                                    (<HomeOutlined sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36
                                }}/>)}
                            />
                        </Stack>
                    </AccordionDetails>
                </Accordion>

                <SidebarLink
                    label="Features"
                    active={pathname === '/features'}
                    path="/features"
                    icon={
                        pathname === '/features' ? (
                            <Home
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <HomeOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36
                                }}/>
                        )
                    }
                />


                <SidebarLink
                    label="Stories"
                    active={pathname === '/stories'}
                    path="/stories"
                    icon={
                        pathname === '/stories' ? (
                            <Home
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <HomeOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36
                                }}/>
                        )
                    }
                />


                <SidebarLink
                    label="Help Center"
                    active={pathname === '/help-center'}
                    path="/help-center"
                    icon={
                        pathname === '/help-center' ? (
                            <Home
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <HomeOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36
                                }}/>
                        )
                    }
                />


                <SidebarLink
                    label="About"
                    active={pathname === '/about'}
                    path="/about"
                    icon={
                        pathname === '/about' ? (
                            <Home
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <HomeOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36
                                }}/>
                        )
                    }
                />


                <SidebarLink
                    label="Contact"
                    active={pathname === '/contact'}
                    path="/contact"
                    icon={
                        pathname === '/contact' ? (
                            <Home
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <HomeOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36
                                }}/>
                        )
                    }
                />
            </Stack>
        </Box>
    )
}

export default MobileSidebar;
