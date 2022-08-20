import AuthLayout from "../../components/layout/auth-layout";
import {Container, Typography} from "@mui/material";

const ProfilePage = () => {
    return (
        <AuthLayout>
            <Container>
                <Typography variant="h4" align="center">Profile Page</Typography>
            </Container>
        </AuthLayout>
    )
}

export default ProfilePage;
