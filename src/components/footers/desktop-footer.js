import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const DesktopFooter = () => {
    return (
        <Box sx={{backgroundColor: 'background.default', paddingY: 4}}>
            <Container>
                <Grid container={true} justifyContent="space-around">
                    <Grid item={true} xs={3}>
                        <Typography variant="h6" sx={{color: 'text.primary', mb: 4}}>Company</Typography>

                        <Stack direction="column" spacing={2}>
                            <Link to='/about' style={{textDecoration: 'none'}}>
                                <Button variant="text" sx={{textTransform: 'capitalize', color: 'text.secondary'}}>
                                    About Us
                                </Button>
                            </Link>
                            <Link to='/contact' style={{textDecoration: 'none'}}>
                                <Button variant="text" sx={{textTransform: 'capitalize', color: 'text.secondary'}}>
                                    Contact Us
                                </Button>
                            </Link>
                        </Stack>
                    </Grid>

                    <Grid item={true} xs={3}>
                        <Typography variant="h6" sx={{color: 'text.primary', mb: 4}}>Medallions</Typography>

                        <Stack direction="column" spacing={2}>
                            <Link to='/medallion/overview' style={{textDecoration: 'none'}}>
                                <Button variant="text" sx={{textTransform: 'capitalize', color: 'text.secondary'}}>
                                    About Medallions
                                </Button>
                            </Link>
                            <Link to='/medallion/features' style={{textDecoration: 'none'}}>
                                <Button variant="text" sx={{textTransform: 'capitalize', color: 'text.secondary'}}>
                                    Medallion Features
                                </Button>
                            </Link>
                            <Link to='/medallions' style={{textDecoration: 'none'}}>
                                <Button variant="text" sx={{textTransform: 'capitalize', color: 'text.secondary'}}>
                                    Buy a Medallion
                                </Button>
                            </Link>
                            <Link to='/stories' style={{textDecoration: 'none'}}>
                                <Button variant="text" sx={{textTransform: 'capitalize', color: 'text.secondary'}}>
                                    View Stories
                                </Button>
                            </Link>
                        </Stack>
                    </Grid>

                    <Grid item={true} xs={3}>
                        <Typography variant="h6" sx={{color: 'text.primary', mb: 4}}>Platform</Typography>

                        <Stack direction="column" spacing={2}>
                            <Link to='/features' style={{textDecoration: 'none'}}>
                                <Button variant="text" sx={{textTransform: 'capitalize', color: 'text.secondary'}}>
                                    Our Platform
                                </Button>
                            </Link>
                            <Link to='/help-center' style={{textDecoration: 'none'}}>
                                <Button variant="text" sx={{textTransform: 'capitalize', color: 'text.secondary'}}>
                                    Help Center
                                </Button>
                            </Link>
                        </Stack>
                    </Grid>

                    <Grid item={true} xs={3}>
                        <Typography variant="h6" sx={{color: 'text.primary', mb: 4}}>Legal</Typography>

                        <Stack direction="column" spacing={2}>
                            <Link to='/terms' style={{textDecoration: 'none'}}>
                                <Button variant="text" sx={{textTransform: 'capitalize', color: 'text.secondary'}}>
                                    Terms & Conditions
                                </Button>
                            </Link>
                            <Link to='/privacy-policy' style={{textDecoration: 'none'}}>
                                <Button variant="text" sx={{textTransform: 'capitalize', color: 'text.secondary'}}>
                                    Privacy Policy
                                </Button>
                            </Link>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default DesktopFooter;
