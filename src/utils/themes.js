import {createTheme} from "@mui/material";

const lightTheme = createTheme({
    typography: {
        fontFamily: 'TTSquares, SofiaPro, EuclidCircularB, GoogleSans, EuclidCircularB, TTSquares'
    },
    palette: {
        primary: {
            main: '#34a853'
        },
        secondary: {
            main: '#1a73e8'
        },
        text: {
            primary: '#202124',
            secondary: '#5f6368',
            active: '#f8f9fa',
            inactive: '#d2d3d7'
        },
        mode: 'light',
        background: {
            paper: '#ffffff',
            default: '#e8eaed',
            light: 'rgba(232,234,237,0.3)',
            appBar: 'rgba(91,91,91,0.85)'
        },
        light: {
            secondary: 'rgba(26,115,232,0.3)',
            primary: 'rgba(52,168,83,0.3)',
            red: 'rgba(217,48,37,0.3)',
            yellow: 'rgba(249,171,0,0.3)',
            green: 'rgba(52,168,83,0.3)',
            blue: 'rgba(26,115,232,0.3)',
            white: 'rgba(255, 255, 255, 0.3)',
            active: 'rgba(255, 255, 255, 0.3)'
        },
        colors: {
            yellow: '#f9ab00',
            red: '#d93025',
            blue: '#1a73e8',
            green: '#34a853'
        }
    },
    shape: {
        borderRadius: 8
    }
});

const darkTheme = createTheme({
    typography: {
        fontFamily: 'TTSquares,SofiaPro, EuclidCircularB, GoogleSans, EuclidCircularB, TTSquares'
    },
    palette: {
        primary: {
            main: '#34a853'
        },
        secondary: {
            main: '#519bff'
        },
        text: {
            primary: '#f8f9fa',
            secondary: '#d2d3d7',
            active: '#f8f9fa',
            inactive: '#d2d3d7'
        },
        mode: 'dark',
        background: {
            paper: '#303136',
            default: '#202124',
            light: 'rgba(32,33,36,0.3)',
            appBar: 'rgba(32,33,36,0.85)'
        },
        light: {
            secondary: 'rgba(81,155,255,0.3)',
            primary: 'rgba(52,168,83,0.3)',
            red: 'rgba(217,48,37,0.3)',
            yellow: 'rgba(249,171,0,0.3)',
            green: 'rgba(52,168,83,0.3)',
            blue: 'rgba(81,155,255,0.3)',
            white: 'rgba(255, 255, 255, 0.3)',
            active: 'rgba(255, 255, 255, 0.3)'
        },
        colors: {
            yellow: '#f9ab00',
            red: '#d93025',
            blue: '#519bff',
            green: '#34a853',
            white: '#ffffff'
        }
    },
    shape: {
        borderRadius: 8
    }
});

export const THEMES = {lightTheme, darkTheme};
