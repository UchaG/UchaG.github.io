import { createTheme } from "@mui/material"

// #0000FF

export const colors = {
    primary: {
        50: '#B8B8FF',
        100: '#A3A3FF',
        200: '#7A7AFF',
        300: '#5252FF',
        400: '#2929FF',
        500: '#0000FF',
        600: '#0000C7',
        700: '#00008F',
        800: '#000057',
        900: '#00001F'
    },
    green: {
        50: '#B8FFB8',
        100: '#A3FFA3',
        200: '#7AFF7A',
        300: '#52FF52',
        400: '#29FF29',
        500: '#00FF00',
        600: '#00C700',
        700: '#008F00',
        800: '#005700',
        900: '#001F00'
    },
    yellow: {
        50: '#FFFFB8',
        100: '#FFFFA3',
        200: '#FFFF7A',
        300: '#FFFF52',
        400: '#FFFF29',
        500: '#FFFF00',
        600: '#C7C700',
        700: '#8F8F00',
        800: '#575700',
        900: '#1F1F00'
    }
}

export const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary[500]
        },
        secondary: {
            main: colors.green[500]
        }
    },
    typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(','),
        fontSize: 12,
        h1: {
            fontFamily: ["Montserrat", "sans-serif"].join(','),
            fontSize: 40
        },
        h2: {
            fontFamily: ["Montserrat", "sans-serif"].join(','),
            fontSize: 32
        },
        h3: {
            fontFamily: ["Montserrat", "sans-serif"].join(','),
            fontSize: 24
        },
        h4: {
            fontFamily: ["Montserrat", "sans-serif"].join(','),
            fontSize: 20
        },
        h5: {
            fontFamily: ["Montserrat", "sans-serif"].join(','),
            fontSize: 16
        },
        h6: {
            fontFamily: ["Montserrat", "sans-serif"].join(','),
            fontSize: 14
        }
    }
})
