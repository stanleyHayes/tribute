import {Button, Card, CardContent, CardMedia, Link, Stack, Typography} from "@mui/material";
import {ArrowRightAlt, Instagram, LinkedIn, Twitter} from "@mui/icons-material";

const Leader = ({leader}) => {

    return (
        <Card
            elevation={0}
            variant="outlined"
            sx={{
                borderBottomRightRadius: 4,
                borderTopRightRadius: 32,
                borderBottomLeftRadius: 32,
                borderTopLeftRadius: 4,
                height: '100%',
                position: 'relative',
                '&:hover': {
                    '& .media': {
                        transform: 'scale(1.1)',
                        transition: 'transform 350ms ease-in-out'
                    }
                }
            }}>
            <CardMedia
                className="media"
                src={leader.image}
                sx={{
                    overflow: 'hidden',
                    height: 250,
                    objectFit: 'cover',
                    objectPosition: 'top'
                }}
                component="img"
            />
            <CardContent>
                <Stack sx={{mb: 1}} direction="row" justifyContent="center" spacing={2}>
                    <Link href={leader.linkedIn} rel="noopener" target="_blank" underline="none">
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
                    <Link href={leader.twitter} rel="noopener" target="_blank" underline="none">
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
                    <Link href={leader.instagram} rel="noopener" target="_blank" underline="none">
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
                <Typography variant="h6" align="center" sx={{color: 'text.primary', mb: 1}}>
                    {leader.name}
                </Typography>
                <Typography variant="body2" align="center" sx={{color: 'text.secondary', mb: 1}}>
                    {leader.position}
                </Typography>
                <Link href={`mailto:${leader.email}`} underline="none">
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
                        {`Contact ${leader.name.split(' ')[0]}`}
                    </Button>
                </Link>
            </CardContent>
        </Card>
    )
}

export default Leader;
