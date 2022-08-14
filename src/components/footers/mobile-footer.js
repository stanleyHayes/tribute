import {Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {KeyboardArrowUp} from "@mui/icons-material";

const MobileFooter = () => {
    return (
        <Box sx={{backgroundColor: 'background.default', paddingY: 4}}>
            <Container>
                <Accordion sx={{backgroundColor: 'background.default'}} elevation={0}>
                    <AccordionSummary expandIcon={<KeyboardArrowUp/>}>
                        <Typography variant="h6" sx={{color: 'text.primary'}}>Company</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
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
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{backgroundColor: 'background.default'}} elevation={0}>
                    <AccordionSummary expandIcon={<KeyboardArrowUp/>}>
                        <Typography variant="h6" sx={{color: 'text.primary'}}>Medallions</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
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
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{backgroundColor: 'background.default'}} elevation={0}>
                    <AccordionSummary expandIcon={<KeyboardArrowUp/>}>
                        <Typography variant="h6" sx={{color: 'text.primary'}}>Platform</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
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
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{backgroundColor: 'background.default'}} elevation={0}>
                    <AccordionSummary expandIcon={<KeyboardArrowUp/>}>
                        <Typography variant="h6" sx={{color: 'text.primary'}}>Legal</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
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
                    </AccordionDetails>
                </Accordion>
            </Container>
        </Box>
    )
}

export default MobileFooter;
