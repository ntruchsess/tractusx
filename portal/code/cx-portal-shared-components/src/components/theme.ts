import { createTheme } from '@mui/material/styles'

const palette = {
  primary: {
    main: '#0f71cb',
    dark: '#0d55af',
    shadow: 'rgba(13, 85, 175, 0.4)',
  },
  secondary: {
    main: '#eaf1fe',
    dark: '#d4e3fe',
  },
  action: {
    disabled: '#ADADAD',
    disabledBackground: '#EAEAEA',
  },
  ui: {
    white: {
      main: '#fff',
    },
    black: {
      main: '#000',
    },
  },
}

export const theme = createTheme({
  palette,
  typography: {
    fontFamily: [
      'LibreFranklin-Light',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    button: {
      fontSize: 16,
      lineHeight: 1.5,
      textTransform: 'none',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: 'none',
          fontSize: 16,
          padding: '16px 28px',
          ':hover': {
            boxShadow: 'none',
          },
          ':focus': {
            boxShadow: `0px 0px 0px 3px ${palette.primary.shadow}`,
          },
          ':active': {
            boxShadow: `0px 0px 0px 3px ${palette.primary.shadow}`,
          },
        },
        sizeMedium: {
          padding: '14px 24px',
        },
        sizeSmall: {
          fontSize: 14,
          padding: '10px 18px',
        },
        outlined: {
          borderColor: palette.primary.main,
          borderWidth: 2,
          padding: '14px 26px',
          ':hover': {
            color: palette.primary.dark,
            borderColor: palette.primary.dark,
            borderWidth: 2,
            backgroundColor: 'transparent',
          },
          ':disabled': {
            borderColor: palette.action.disabled,
            borderWidth: 2,
          },
        },
        outlinedSizeMedium: {
          padding: '12px 22px',
        },
        outlinedSizeSmall: {
          padding: '8px 16px',
        },
        text: {
          ':hover': {
            backgroundColor: palette.secondary.dark,
          },
        },
      },
    },
  },
})
