import './App.css';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";
import {selectUI} from "./redux/features/ui/ui-slice";
import {THEMES} from "./utils/themes";
import {Route, Routes} from "react-router";
import HomePage from "./pages/home/home-page";
import AboutPage from "./pages/about/about-page";
import ContactPage from "./pages/contact/contact-page";
import FeaturesPage from "./pages/features/features-page";
import HelpPage from "./pages/help/help-page";
import MedallionFeaturesPage from "./pages/medalions/medallion-features-page";
import MedallionPage from "./pages/medalions/medallions-page";
import StoriesPage from "./pages/stories/stories-page";
import NotFoundPage from "./pages/404/not-found-page";
import BuyMedallionsPage from "./pages/medalions/buy-medallions-page";
import VerificationAcknowledgmentPage from "./pages/authentication/verification-acknowledgment-page";
import RegisterPage from "./pages/authentication/register-page";
import LoginPage from "./pages/authentication/login-page";
import ResetPasswordPage from "./pages/authentication/reset-password-page";
import ForgotPasswordPage from "./pages/authentication/forgot-password-page";
import VerifyAccountPage from "./pages/authentication/verify-account-page";
import VerifyLoginOtpPage from "./pages/authentication/verify-login-otp-page";
import WelcomePage from "./pages/authentication/welcome-page";
import StoriesAuthPage from "./pages/stories/stories-auth-page";
import ProfilePage from "./pages/profile/profile-page";
import UpdateProfilePage from "./pages/account/update-profile-page";
import SettingsPage from "./pages/account/settings-page";
import ChangePasswordPage from "./pages/account/change-password-page";
import DashboardPage from "./pages/dashboard/dashboard-page";
import ProductsPage from "./pages/medalions/products-page";
import CartPage from "./pages/cart/cart-page";
import CheckoutPage from "./pages/checkout/checkout-page";
import AuthCheckoutPage from "./pages/checkout/auth-checkout-page";
import OrdersPage from "./pages/orders/orders-page";
import ProductDetailPage from "./pages/medalions/product-detail-page";
import MedallionDetailPage from "./pages/medalions/medallion-detail-page";
import AuthCartPage from "./pages/cart/auth-cart-page";
import WishlistsPage from "./pages/wishlists/wishlists-page";
import OrderDetailPage from "./pages/orders/order-detail-page";

function App() {
    const {themeVariant} = useSelector(selectUI);
    const theme = themeVariant === 'dark' ? THEMES.darkTheme : THEMES.lightTheme;
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme={true}/>
            <Routes>
                <Route element={<HomePage/>} path="/"/>
                <Route element={<AboutPage/>} path="/about"/>
                <Route element={<ContactPage/>} path="/contact"/>
                <Route element={<FeaturesPage/>} path="/features"/>
                <Route element={<HelpPage/>} path="/help-center"/>
                <Route element={<StoriesPage/>} path="/our-stories"/>
                <Route element={<StoriesAuthPage/>} path="/stories"/>
                <Route element={<ProfilePage/>} path="/profile"/>
                <Route element={<AuthCartPage/>} path="/cart"/>
                <Route element={<CartPage/>} path="/cart"/>
                <Route element={<OrdersPage/>} path="/orders"/>
                <Route element={<OrderDetailPage/>} path="/orders/:orderID"/>
                <Route element={<UpdateProfilePage/>} path="/update-profile"/>
                <Route element={<SettingsPage/>} path="/settings"/>
                <Route element={<DashboardPage/>} path="/dashboard"/>
                <Route element={<ChangePasswordPage/>} path="/change-password"/>
                <Route element={<MedallionFeaturesPage/>} path="/medallion/features"/>
                <Route element={<MedallionPage/>} path="/medallion/overview"/>
                <Route element={<MedallionDetailPage/>} path="/medallions/:productID"/>
                <Route element={<BuyMedallionsPage/>} path="/medallions"/>
                <Route element={<ProductsPage/>} path="/products"/>
                <Route element={<ProductDetailPage/>} path="/products/:productID"/>
                <Route element={<OrdersPage/>} path="/orders"/>
                <Route element={<WishlistsPage/>} path="/wishlists"/>
                <Route element={<CheckoutPage/>} path="/checkout"/>
                <Route element={<AuthCheckoutPage/>} path="/a/checkout"/>
                <Route element={<VerifyAccountPage/>} exact={true} path="/auth/verify/:token"/>
                <Route element={<VerificationAcknowledgmentPage/>} exact={true} path="/account/verify/success"/>
                <Route element={<RegisterPage/>} exact={true} path="/auth/register"/>
                <Route element={<VerifyLoginOtpPage/>} exact={true} path="/auth/otp/:token/verify"/>
                <Route element={<LoginPage/>} exact={true} path="/auth/login"/>
                <Route element={<WelcomePage/>} exact={true} path="/welcome"/>
                <Route element={<ResetPasswordPage/>} exact={true} path="/auth/reset-password"/>
                <Route element={<ForgotPasswordPage/>} exact={true} path="/auth/forgot-password"/>
                <Route element={<NotFoundPage/>} path="*"/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
