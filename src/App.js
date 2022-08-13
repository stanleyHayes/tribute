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
                <Route element={<StoriesPage/>} path="/stories"/>
                <Route element={<MedallionFeaturesPage/>} path="/medallion/features"/>
                <Route element={<MedallionPage/>} path="/medallion/overview"/>
                <Route element={<NotFoundPage/>} path="*"/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
