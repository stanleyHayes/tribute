import {Box, Button, Card, CardContent, CardMedia, Link, Stack, Typography} from "@mui/material";
import {ArrowRightAlt} from "@mui/icons-material";

const Help = ({help}) => {
    return (
        <Box sx={{position: 'relative'}}>
            <Card
                sx={{
                    padding: 4,
                    borderBottomRightRadius: 0,
                    borderTopRightRadius: 32,
                    borderBottomLeftRadius: 32,
                    borderTopLeftRadius: 0,
                }}>
                <CardMedia
                    className="media"
                    src={help.icon}
                    sx={{
                        height: 100,
                        width: 100,
                        objectFit: 'cover',
                        objectPosition: 'top',
                        position: 'absolute',
                        transform: 'translate(-50%, -80%)',
                        transition: 'transform 300ms ease-in-out',
                        zIndex: 1000,
                        left: '50%',
                        borderRadius: '100%'
                    }}
                    component="img"
                />
                <CardContent>
                    <Stack direction="column" spacing={2}>
                        <Typography variant="h6" sx={{color: 'text.primary'}} align="center">
                            {help.title}
                        </Typography>
                        <Typography variant="body2" sx={{color: 'text.secondary'}} align="center">
                            {help.description}
                        </Typography>
                        <Link to={help.link} style={{textDecoration: 'none'}}>
                            <Button
                                variant="contained"
                                color="secondary"
                                fullWidth={true}
                                size="large"
                                disableElevation={true}
                                endIcon={<ArrowRightAlt/>}
                                sx={{
                                    textTransform: 'capitalize',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 12,
                                    borderBottomLeftRadius: 12,
                                    borderTopLeftRadius: 4
                                }}>
                                Read More
                            </Button>
                        </Link>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Help;
