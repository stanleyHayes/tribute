import {Box, Button, Container, Divider, Grid, Link, Stack, Typography} from "@mui/material";
import MobileFooter from "./mobile-footer";
import DesktopFooter from "./desktop-footer";
import {Facebook, Instagram, LinkedIn, Twitter} from "@mui/icons-material";

const Footer = () => {
    return (
        <Box>
            <Box sx={{py: 8}}>
                <Container>
                    <Typography variant="h6" align="center" sx={{color: 'text.primary', mb: 4}}>
                        Note:
                    </Typography>
                    <Typography variant="h6" align="center" sx={{color: 'text.primary', mb: 4}}>
                        Registering an account and using our platform is free - You only pay for the Turning Hearts
                        Medallion if you decide to purchase it. We are now shipping Turning Hearts Medallions to
                        every country.
                    </Typography>
                    <Grid container={true} spacing={2} alignItems="center" justifyContent="center">
                        <Grid item={true} xs={12} md="auto">
                            <Link to="/auth/register" style={{textDecoration: 'none'}}>
                                <Button
                                    sx={{
                                        textTransform: 'capitalize',
                                        borderTopRightRadius: 16,
                                        borderBottomRightRadius: 0,
                                        borderBottomLeftRadius: 16,
                                        borderTopLeftRadius: 0,
                                    }}
                                    variant="contained"
                                    fullWidth={true}
                                    color="secondary"
                                    disableElevation={true}
                                    size="large">
                                    Register today
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item={true} xs={12} md="auto">
                            <Link to="/medallions" style={{textDecoration: 'none'}}>
                                <Button
                                    color="secondary"
                                    sx={{
                                        textTransform: 'capitalize',
                                        backgroundColor: 'light.secondary',
                                        borderTopRightRadius: 16,
                                        borderBottomRightRadius: 0,
                                        borderBottomLeftRadius: 16,
                                        borderTopLeftRadius: 0,
                                        borderWidth: 2
                                    }}
                                    variant="outlined"
                                    fullWidth={true}
                                    disableElevation={true}
                                    size="large">
                                    Buy a Medallion
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                <Container>
                    <Stack direction="row" justifyContent="space-around">
                        <Link href="#" target="_blank" rel="noopener" underline="none">
                            <Facebook
                                color="secondary"
                                sx={{
                                    backgroundColor: 'light.secondary',
                                    padding: 1,
                                    fontSize: 36,
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 12,
                                    borderBottomLeftRadius: 12,
                                    borderTopLeftRadius: 4
                                }}/>
                        </Link>

                        <Link href="#" target="_blank" rel="noopener" underline="none">
                            <Twitter
                                color="secondary"
                                sx={{
                                    backgroundColor: 'light.secondary',
                                    padding: 1,
                                    fontSize: 36,
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 12,
                                    borderBottomLeftRadius: 12,
                                    borderTopLeftRadius: 4
                                }}/>
                        </Link>

                        <Link href="#" target="_blank" rel="noopener" underline="none">
                            <LinkedIn
                                color="secondary"
                                sx={{
                                    backgroundColor: 'light.secondary',
                                    padding: 1,
                                    fontSize: 36,
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 12,
                                    borderBottomLeftRadius: 12,
                                    borderTopLeftRadius: 4
                                }}/>
                        </Link>

                        <Link href="#" rel="noopener" target="_blank" underline="none">
                            <Instagram
                                color="secondary"
                                sx={{
                                    backgroundColor: 'light.secondary',
                                    padding: 1,
                                    fontSize: 36,
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 12,
                                    borderBottomLeftRadius: 12,
                                    borderTopLeftRadius: 4
                                }}/>
                        </Link>
                    </Stack>
                </Container>
            </Box>

            <Box sx={{display: {xs: 'none', lg: 'block'}}}>
                <DesktopFooter/>
            </Box>
            <Box sx={{display: {xs: 'block', lg: 'none'}}}>
                <MobileFooter/>
            </Box>
            <Divider variant="middle"/>
            <Box sx={{paddingY: 2}}>
                <Container>
                    <Typography sx={{color: 'text.secondary'}} align="center">
                        Tribute &copy; 2022 - All rights reserved.
                    </Typography>
                </Container>
            </Box>
        </Box>
    )
}
export default Footer;
