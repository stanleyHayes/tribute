import AuthLayout from "../../components/layout/auth-layout";
import {Container, Typography} from "@mui/material";

const SettingsPage = () => {
    return (
        <AuthLayout>
            <Container>
                <Typography variant="h4" align="center">Settings Page</Typography>
            </Container>
        </AuthLayout>
    )
}

export default SettingsPage;
