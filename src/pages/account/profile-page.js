import {Avatar, Box, Button, Card, CardContent, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import Text from "../../components/shared/text";
import Info from "../../components/shared/info";
import {useSelector} from "react-redux";
import {selectAuth} from "../../redux/features/auth/auth-slice";
import {
    Call,
    ChevronRight,
    Close,
    DeleteForever,
    Edit,
    ExitToApp,
    Lock,
    Mail,
    Person,
    Security,
    Settings
} from "@mui/icons-material";
import ButtonLink from "../../components/shared/button-link";
import {UTILS} from "../../utils/utils";
import {lightBlue, red} from "@mui/material/colors";
import AuthLayout from "../../components/layout/auth-layout";

const ProfilePage = () => {

    const {authData} = useSelector(selectAuth);
    return (
        <AuthLayout>
            <Container>
                <Box sx={{py: 4}}>
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12} md={4}>
                            <Stack direction="column" spacing={2}>
                                <Card
                                    elevation={1}
                                    sx={{
                                        borderTopRightRadius: 16,
                                        borderBottomRightRadius: 0,
                                        borderBottomLeftRadius: 16,
                                        borderTopLeftRadius: 0
                                    }}>
                                    <CardContent>
                                        <Stack direction="column" spacing={1}>
                                            <Stack direction="row" justifyContent="center">
                                                <Avatar
                                                    sx={{backgroundColor: 'light.secondary', width: 150, height: 150}}>
                                                    <Typography
                                                        sx={{color: 'secondary.main'}}
                                                        variant="h2">
                                                        {UTILS.getInitials(authData.fullName)}
                                                    </Typography>
                                                </Avatar>
                                            </Stack>
                                            <Typography
                                                sx={{color: 'text.primary'}}
                                                align="center" variant="h5">
                                                {authData.fullName}
                                            </Typography>
                                        </Stack>

                                        <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                        <Stack direction="row" justifyContent="center" spacing={2} alignItems="center">
                                            <Edit
                                                sx={{
                                                    cursor: 'pointer',
                                                    color: 'secondary.main',
                                                    borderRadius: '100%',
                                                    padding: 1,
                                                    fontSize: 32,
                                                    backgroundColor: 'light.secondary'
                                                }}/>

                                            <Lock
                                                sx={{
                                                    cursor: 'pointer',
                                                    color: 'secondary.main',
                                                    borderRadius: '100%',
                                                    padding: 1,
                                                    fontSize: 32,
                                                    backgroundColor: 'light.secondary'
                                                }}/>

                                            <Settings
                                                sx={{
                                                    cursor: 'pointer',
                                                    color: 'secondary.main',
                                                    borderRadius: '100%',
                                                    padding: 1,
                                                    fontSize: 32,
                                                    backgroundColor: 'light.secondary'
                                                }}/>

                                            <ExitToApp
                                                sx={{
                                                    cursor: 'pointer',
                                                    color: 'secondary.main',
                                                    borderRadius: '100%',
                                                    padding: 1,
                                                    fontSize: 32,
                                                    backgroundColor: 'light.secondary'
                                                }}/>
                                        </Stack>
                                    </CardContent>
                                </Card>
                                <Card
                                    elevation={1}
                                    sx={{
                                        borderTopRightRadius: 16,
                                        borderBottomRightRadius: 0,
                                        borderBottomLeftRadius: 16,
                                        borderTopLeftRadius: 0
                                    }}>
                                    <CardContent>
                                        <Stack
                                            direction="column"
                                            spacing={1}
                                            divider={<Divider variant="fullWidth" light={true}/>}>
                                            <Stack
                                                justifyContent="space-between"
                                                alignItems="center"
                                                direction="row"
                                                spacing={2}>
                                                <Stack spacing={3} direction="row" alignItems="center">
                                                    <ExitToApp
                                                        sx={{
                                                            cursor: 'pointer',
                                                            color: 'secondary.main',
                                                            borderRadius: '100%',
                                                            padding: 1,
                                                            fontSize: 32,
                                                            backgroundColor: 'light.secondary'
                                                        }}/>
                                                    <Typography
                                                        sx={{color: 'secondary.main'}}
                                                        variant="body1">
                                                        Logout
                                                    </Typography>
                                                </Stack>
                                                <ChevronRight sx={{color: 'secondary.main'}}/>
                                            </Stack>

                                            <Stack
                                                justifyContent="space-between"
                                                alignItems="center"
                                                direction="row"
                                                spacing={2}>
                                                <Stack spacing={3} direction="row" alignItems="center">
                                                    <Close
                                                        sx={{
                                                            cursor: 'pointer',
                                                            color: lightBlue[800],
                                                            borderRadius: '100%',
                                                            padding: 1,
                                                            fontSize: 32,
                                                            backgroundColor: lightBlue[200]
                                                        }}/>
                                                    <Typography
                                                        sx={{color: lightBlue[800]}}
                                                        variant="body1">
                                                        Disable Account
                                                    </Typography>
                                                </Stack>
                                                <ChevronRight sx={{color: lightBlue[800]}}/>
                                            </Stack>

                                            <Stack
                                                justifyContent="space-between"
                                                alignItems="center"
                                                direction="row"
                                                spacing={2}>
                                                <Stack spacing={3} direction="row" alignItems="center">
                                                    <DeleteForever
                                                        sx={{
                                                            cursor: 'pointer',
                                                            color: red[800],
                                                            borderRadius: '100%',
                                                            padding: 1,
                                                            fontSize: 32,
                                                            backgroundColor: red[200]
                                                        }}/>
                                                    <Typography
                                                        sx={{color: red[800]}}
                                                        variant="body1">
                                                        Delete Account
                                                    </Typography>
                                                </Stack>
                                                <ChevronRight sx={{color: red[800]}}/>
                                            </Stack>
                                        </Stack>
                                    </CardContent>
                                </Card>

                            </Stack>
                        </Grid>
                        <Grid item={true} xs={12} md={8}>
                            <Stack direction="column" spacing={2}>
                                <Card
                                    elevation={1}
                                    sx={{
                                        borderTopRightRadius: 16,
                                        borderBottomRightRadius: 0,
                                        borderBottomLeftRadius: 16,
                                        borderTopLeftRadius: 0
                                    }}>
                                    <CardContent>
                                        <Stack
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center">
                                            <Text
                                                icon={<Info sx={{
                                                    cursor: 'pointer',
                                                    color: 'secondary.main',
                                                    borderRadius: '100%',
                                                    padding: 1,
                                                    fontSize: 32,
                                                    backgroundColor: 'light.secondary'
                                                }}/>}
                                                text={<Typography variant="h6" sx={{color: 'text.primary'}}>
                                                    Personal Information
                                                </Typography>}
                                            />

                                            <Button
                                                size="large"
                                                variant="text"
                                                color="secondary"
                                                sx={{textTransform: 'capitalize'}}>
                                                Edit
                                            </Button>
                                        </Stack>

                                        <Divider sx={{my: 2}} variant="fullWidth" light={true}/>

                                        <Grid container={true} spacing={2}>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info icon={<Mail sx={{
                                                    cursor: 'pointer',
                                                    color: 'secondary.main',
                                                    borderRadius: '100%',
                                                    padding: 1,
                                                    fontSize: 32,
                                                    backgroundColor: 'light.secondary'
                                                }}/>} title={
                                                    <Typography
                                                        sx={{color: 'text.secondary'}}
                                                        variant="body2">
                                                        Email
                                                    </Typography>}
                                                      value={
                                                          <Typography
                                                              sx={{color: 'text.primary'}}
                                                              variant="body1">
                                                              {authData.email}
                                                          </Typography>
                                                      }
                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info icon={<Call
                                                    sx={{
                                                        cursor: 'pointer',
                                                        color: 'secondary.main',
                                                        borderRadius: '100%',
                                                        padding: 1,
                                                        fontSize: 32,
                                                        backgroundColor: 'light.secondary'
                                                    }}/>} title={
                                                    <Typography
                                                        sx={{color: 'text.secondary'}}
                                                        variant="body2">
                                                        Phone
                                                    </Typography>}
                                                      value={
                                                          <Typography
                                                              sx={{color: 'text.primary'}}
                                                              variant="body1">
                                                              {authData.phone}
                                                          </Typography>
                                                      }
                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info icon={<Person sx={{
                                                    cursor: 'pointer',
                                                    color: 'secondary.main',
                                                    borderRadius: '100%',
                                                    padding: 1,
                                                    fontSize: 32,
                                                    backgroundColor: 'light.secondary'
                                                }}/>} title={
                                                    <Typography
                                                        sx={{color: 'text.secondary'}}
                                                        variant="body2">
                                                        Username
                                                    </Typography>}
                                                      value={
                                                          <Typography
                                                              sx={{color: 'text.primary'}}
                                                              variant="body1">
                                                              {authData.username}
                                                          </Typography>
                                                      }
                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info icon={
                                                    <Security sx={{
                                                        cursor: 'pointer',
                                                        color: 'secondary.main',
                                                        borderRadius: '100%',
                                                        padding: 1,
                                                        fontSize: 32,
                                                        backgroundColor: 'light.secondary'
                                                    }}/>} title={
                                                    <Typography
                                                        sx={{color: 'text.secondary'}}
                                                        variant="body2">
                                                        Account Status
                                                    </Typography>}
                                                      value={
                                                          <Typography
                                                              sx={{color: 'text.primary'}}
                                                              variant="body1">
                                                              {authData.status}
                                                          </Typography>
                                                      }
                                                />
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>

                                <Card elevation={1}>
                                    <CardContent>
                                        <Stack
                                            mb={1}
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center">
                                            <Text
                                                icon={<Info sx={{
                                                    cursor: 'pointer',
                                                    color: 'secondary.main',
                                                    borderRadius: '100%',
                                                    padding: 1,
                                                    fontSize: 32,
                                                    backgroundColor: 'light.secondary'
                                                }}/>}
                                                text={<Typography variant="h6" sx={{color: 'text.primary'}}>
                                                    Address Information
                                                </Typography>}
                                            />
                                        </Stack>

                                        <Divider light={true} sx={{my: 1}} variant="middle"/>

                                        <Grid spacing={2} container={true}>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info icon={<Call
                                                    sx={{
                                                        cursor: 'pointer',
                                                        color: 'secondary.main',
                                                        borderRadius: '100%',
                                                        padding: 1,
                                                        fontSize: 32,
                                                        backgroundColor: 'light.secondary'
                                                    }}/>} title={
                                                    <Typography
                                                        sx={{color: 'text.secondary'}}
                                                        variant="body2">
                                                        Country
                                                    </Typography>}
                                                      value={
                                                          <Typography
                                                              sx={{color: 'text.primary'}}
                                                              variant="body1">
                                                              {authData?.address?.country}
                                                          </Typography>
                                                      }
                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info icon={<Call
                                                    sx={{
                                                        cursor: 'pointer',
                                                        color: 'secondary.main',
                                                        borderRadius: '100%',
                                                        padding: 1,
                                                        fontSize: 32,
                                                        backgroundColor: 'light.secondary'
                                                    }}/>} title={
                                                    <Typography
                                                        sx={{color: 'text.secondary'}}
                                                        variant="body2">
                                                        State or Province or Region
                                                    </Typography>}
                                                      value={
                                                          <Typography
                                                              sx={{color: 'text.primary'}}
                                                              variant="body1">
                                                              {authData?.address?.stateOrProvinceOrRegion}
                                                          </Typography>
                                                      }
                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info icon={<Call
                                                    sx={{
                                                        cursor: 'pointer',
                                                        color: 'secondary.main',
                                                        borderRadius: '100%',
                                                        padding: 1,
                                                        fontSize: 32,
                                                        backgroundColor: 'light.secondary'
                                                    }}/>} title={
                                                    <Typography
                                                        sx={{color: 'text.secondary'}}
                                                        variant="body2">
                                                        City
                                                    </Typography>}
                                                      value={
                                                          <Typography
                                                              sx={{color: 'text.primary'}}
                                                              variant="body1">
                                                              {authData?.address?.city}
                                                          </Typography>
                                                      }
                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info icon={<Call
                                                    sx={{
                                                        cursor: 'pointer',
                                                        color: 'secondary.main',
                                                        borderRadius: '100%',
                                                        padding: 1,
                                                        fontSize: 32,
                                                        backgroundColor: 'light.secondary'
                                                    }}/>} title={
                                                    <Typography
                                                        sx={{color: 'text.secondary'}}
                                                        variant="body2">
                                                        Address Line 1
                                                    </Typography>}
                                                      value={
                                                          <Typography
                                                              sx={{color: 'text.primary'}}
                                                              variant="body1">
                                                              {authData?.address?.addressLine1}
                                                          </Typography>
                                                      }
                                                />
                                            </Grid>
                                            {authData?.address?.addressLine2 && (
                                                <Grid item={true} xs={12} md={6}>
                                                    <Info icon={<Call
                                                        sx={{
                                                            cursor: 'pointer',
                                                            color: 'secondary.main',
                                                            borderRadius: '100%',
                                                            padding: 1,
                                                            fontSize: 32,
                                                            backgroundColor: 'light.secondary'
                                                        }}/>} title={
                                                        <Typography
                                                            sx={{color: 'text.secondary'}}
                                                            variant="body2">
                                                            Address Line 2
                                                        </Typography>}
                                                          value={
                                                              <Typography
                                                                  sx={{color: 'text.primary'}}
                                                                  variant="body1">
                                                                  {authData?.address?.addressLine2}
                                                              </Typography>
                                                          }
                                                    />
                                                </Grid>
                                            )}
                                        </Grid>
                                    </CardContent>
                                </Card>

                                <Card
                                    elevation={1}
                                    sx={{
                                        borderTopRightRadius: 16,
                                        borderBottomRightRadius: 0,
                                        borderBottomLeftRadius: 16,
                                        borderTopLeftRadius: 0
                                    }}>
                                    <CardContent>
                                        <Stack
                                            direction="column"
                                            spacing={1}
                                            divider={<Divider variant="fullWidth" light={true}/>}>
                                            <ButtonLink
                                                text={<Typography sx={{color: 'text.primary'}} variant="body1">Update
                                                    Profile</Typography>}
                                                endIcon={<ChevronRight sx={{color: 'text.primary'}}/>}
                                                startIcon={
                                                    <Edit sx={{
                                                        cursor: 'pointer',
                                                        color: 'secondary.main',
                                                        borderRadius: '100%',
                                                        padding: 1,
                                                        fontSize: 32,
                                                        backgroundColor: 'light.secondary'
                                                    }}/>
                                                } link="/update-profile"/>

                                            <ButtonLink
                                                text={<Typography sx={{color: 'text.primary'}} variant="body1">Change
                                                    Password</Typography>}
                                                endIcon={<ChevronRight sx={{color: 'text.primary'}}/>}
                                                startIcon={
                                                    <Lock sx={{
                                                        cursor: 'pointer',
                                                        color: 'secondary.main',
                                                        borderRadius: '100%',
                                                        padding: 1,
                                                        fontSize: 32,
                                                        backgroundColor: 'light.secondary'
                                                    }}/>
                                                } link="/change-password"/>

                                            <ButtonLink
                                                text={<Typography sx={{color: 'text.primary'}}
                                                                  variant="body1">Settings</Typography>}
                                                endIcon={<ChevronRight sx={{color: 'text.primary'}}/>}
                                                startIcon={
                                                    <Settings sx={{
                                                        cursor: 'pointer',
                                                        color: 'secondary.main',
                                                        borderRadius: '100%',
                                                        padding: 1,
                                                        fontSize: 32,
                                                        backgroundColor: 'light.secondary'
                                                    }}/>
                                                } link="/settings"/>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </AuthLayout>
    )
}

export default ProfilePage;
