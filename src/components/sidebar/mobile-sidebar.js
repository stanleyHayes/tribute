import {Accordion, AccordionDetails, AccordionSummary, Box, Button, Stack} from "@mui/material";
import SidebarLink from "../shared/sidebar-link";
import {useLocation} from "react-router-dom";
import {
    AutoAwesome,
    AutoAwesomeOutlined,
    ChevronRight,
    Close,
    ContactPage,
    ContactPageOutlined,
    DarkMode,
    Flare,
    FlareOutlined,
    Grade,
    GradeOutlined,
    HelpCenter,
    HelpCenterOutlined,
    Home,
    HomeOutlined,
    Info,
    InfoOutlined,
    LightMode,
    QrCode,
    QrCodeOutlined,
    ViewCarousel,
    ViewCarouselOutlined
} from "@mui/icons-material";
import {closeDrawer, selectUI, toggleTheme} from "../../redux/features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";

const MobileSidebar = () => {

    const {pathname} = useLocation();
    const {themeVariant} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <Box sx={{minHeight: '100vh', minWidth: "80vw", py: 3, backgroundColor: 'background.default'}}>
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
                    sx={{width: '100%', backgroundColor: 'background.default', padding: 0}}
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
                                        (<QrCode sx={{
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
                                        (<QrCodeOutlined sx={{
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
                                active={pathname === '/medallion/overview'}
                                label="Overview"
                                path="/medallion/overview"
                                icon={pathname === '/medallion/overview' ?
                                    (<AutoAwesome sx={{
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
                                    ) : (<AutoAwesomeOutlined sx={{
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
                                active={pathname === '/medallion/features'}
                                label="Features"
                                path="/medallion/features"
                                icon={pathname === '/medallion/features' ?
                                    (<Flare sx={{
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
                                    (<FlareOutlined sx={{
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
                            <Grade
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
                            <GradeOutlined
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
                    label="Our Stories"
                    active={pathname === '/our-stories'}
                    path="/our-stories"
                    icon={
                        pathname === '/our-stories' ? (
                            <ViewCarousel
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
                            <ViewCarouselOutlined
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
                            <HelpCenter
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
                            <HelpCenterOutlined
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
                            <Info
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
                            <InfoOutlined
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
                            <ContactPage
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
                            <ContactPageOutlined
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
