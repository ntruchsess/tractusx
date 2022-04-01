import { createTheme } from '@mui/material/styles'
// Needs to use like this to overwrite data grid styles
// https://mui.com/components/data-grid/getting-started/#typescript
// eslint-disable-next-line
import type {} from '@mui/x-data-grid/themeAugmentation'
import createPalette from '@mui/material/styles/createPalette'
import createTypography from '@mui/material/styles/createTypography'

const getFontFamily = (name: string): string =>
  [
    `"${name}"`,
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
  ].join(',')

const breakpoints = {
  xs: 0,
  sm: 375,
  md: 627,
  lg: 1056,
  xl: 1312,
}

const palette = createPalette({
  common: {
    white: '#fff',
    black: '#000',
  },
  primary: {
    main: '#0f71cb',
    dark: '#0d55af',
    contrastText: '#fff',
    shadow: 'rgba(15, 113, 203, 0.4)',
  },
  secondary: {
    main: '#eaf1fe',
    dark: '#d4e3fe',
    contrastText: '#0f71cb',
  },
  brand: {
    brand01: '#FFA600',
    brand02: '#B3CB2D',
  },
  action: {
    active: '#939393',
    disabled: '#ADADAD',
    disabledBackground: '#EAEAEA',
  },
  danger: {
    danger: '#D91E18',
    dangerHover: '#E5231D',
    dangerBadge: '#FB6540',
  },
  support: {
    success: '#00AA55',
    error: '#D91E18',
  },
  icon: {
    icon01: '#939393',
    icon02: '#B6B6B6',
    icon03: '#333333',
  },
  border: {
    border01: '#DCDCDC',
    border02: '#B6B6B6',
    border03: '#989898',
  },
  background: {
    background01: '#F9F9F9',
    background02: '#F3F3F3',
    background03: '#E9E9E9',
    background04: '#F4FBFD',
    background05: '#F5F9EE',
    background06: '#FFF7EC',
    background07: '#F5F5F5',
    background08: '#FFF6FF',
    background09: '#EDF0F4',
    background10: '#303030F2',
  },
  textField: {
    placeholderText: '#8D8D8D',
    helperText: '#717171',
    background: '#F7F7F7',
    backgroundHover: '#ECECEC',
  },
  text: {
    primary: '#111111',
    secondary: '#252525',
    tertiary: '#888888',
    quaternary: '#A2A2A2',
  },
  accent: {
    accent01: '#4D73D5',
    accent02: '#F2F3FB',
    accent03: '#676BC6',
    accent04: '#E1F1FF',
    accent05: '#FFEBCC',
    accent06: '#5E3416',
    accent07: '#88982D',
    accent08: '#F0F5D5',
    accent09: '#FDB943',
    accent10: '#428C5B',
    accent11: '#337B89',
    accent12: '#2B4078',
  },
  selected: {
    hover: 'rgba(15, 113, 203, 0.05)',
    focus: 'rgba(15, 113, 203, 0.15)',
    active: 'rgba(15, 113, 203, 0.2)',
  },
  pending: {
    main: '#FFECBD',
    contrastText: '#975B27',
  },
  confirmed: {
    main: '#E2F6C7',
    contrastText: '#5C8D45',
  },
  declined: {
    main: '#FEE7E2',
    contrastText: '#FF532F',
  },
  label: {
    main: '#F2F3FB',
    contrastText: '#676BC6',
  },
})

const typography = createTypography(palette, {
  fontFamily: getFontFamily('LibreFranklin'),
  htmlFontSize: 16,
  allVariants: {
    color: palette.text.primary,
  },
  h1: {
    fontFamily: getFontFamily('LibreFranklin-SemiBold'),
    fontSize: 72,
    lineHeight: 88 / 72,
    letterSpacing: 0,
  },
  h2: {
    fontFamily: getFontFamily('LibreFranklin-Medium'),
    fontSize: 56,
    lineHeight: 68 / 56,
    letterSpacing: 0,
  },
  h3: {
    fontFamily: getFontFamily('LibreFranklin-Medium'),
    fontSize: 36,
    lineHeight: 44 / 36,
    letterSpacing: 0,
  },
  h4: {
    fontFamily: getFontFamily('LibreFranklin-SemiBold'),
    fontSize: 24,
    lineHeight: 36 / 24,
    letterSpacing: 0,
  },
  h5: {
    fontFamily: getFontFamily('LibreFranklin-SemiBold'),
    fontSize: 18,
    lineHeight: 28 / 18,
    letterSpacing: 0,
  },
  body1: {
    fontFamily: getFontFamily('LibreFranklin-Light'),
    fontSize: 18,
    lineHeight: 28 / 18,
    letterSpacing: 0,
  },
  body2: {
    fontFamily: getFontFamily('LibreFranklin-Light'),
    fontSize: 16,
    lineHeight: 24 / 16,
    letterSpacing: 0,
  },
  body3: {
    fontFamily: getFontFamily('LibreFranklin-Light'),
    fontSize: 14,
    lineHeight: 20 / 14,
    letterSpacing: 0,
  },
  label1: {
    fontFamily: getFontFamily('LibreFranklin-Medium'),
    fontSize: 18,
    lineHeight: 28 / 18,
    letterSpacing: 0,
  },
  label2: {
    fontFamily: getFontFamily('LibreFranklin-Medium'),
    fontSize: 16,
    lineHeight: 24 / 16,
    letterSpacing: 0,
  },
  label3: {
    fontFamily: getFontFamily('LibreFranklin-Medium'),
    fontSize: 14,
    lineHeight: 20 / 14,
    letterSpacing: 0,
  },
  label4: {
    fontFamily: getFontFamily('LibreFranklin-Medium'),
    fontSize: 12,
    lineHeight: 16 / 12,
    letterSpacing: 0,
  },
  label5: {
    fontFamily: getFontFamily('LibreFranklin-SemiBold'),
    fontSize: 11,
    lineHeight: 16 / 11,
    letterSpacing: 0,
    color: palette.text.secondary,
  },
  caption1: {
    fontFamily: getFontFamily('LibreFranklin'),
    fontSize: 18,
    lineHeight: 28 / 18,
    letterSpacing: 0,
    color: palette.text.tertiary,
  },
  caption2: {
    fontFamily: getFontFamily('LibreFranklin'),
    fontSize: 16,
    lineHeight: 24 / 16,
    letterSpacing: 0,
    color: palette.text.tertiary,
  },
  caption3: {
    fontFamily: getFontFamily('LibreFranklin'),
    fontSize: 14,
    lineHeight: 20 / 14,
    letterSpacing: 0,
    color: palette.text.tertiary,
  },
  helper: {
    fontFamily: getFontFamily('LibreFranklin'),
    fontSize: 12,
    lineHeight: 16 / 12,
    letterSpacing: 0,
    color: palette.text.tertiary,
  },
  button: {
    fontSize: 16,
    lineHeight: 24 / 16,
    textTransform: 'none',
  },
})

export const theme = createTheme({
  breakpoints: {
    values: breakpoints,
  },
  palette,
  typography,
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          ':focus': {
            boxShadow: `0px 0px 0px 3px ${palette.primary.shadow}`,
          },
          ':active': {
            boxShadow: `0px 0px 0px 3px ${palette.primary.shadow}`,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          boxShadow: 'none',
          fontSize: typography.body1.fontSize,
          padding: '16px 28px',
          ':hover': {
            boxShadow: 'none',
          },
          ':active, :focus': {
            boxShadow: `0px 0px 0px 3px ${palette.primary.shadow}`,
          },
        },
        sizeMedium: {
          padding: '14px 24px',
        },
        sizeSmall: {
          fontSize: typography.body3.fontSize,
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
      variants: [
        {
          props: {
            color: 'secondary',
          },
          style: {
            ':hover': {
              color: palette.primary.dark,
            },
          },
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: palette.primary.main,
          padding: 6,
          ':hover': {
            backgroundColor: palette.secondary.dark,
            color: palette.primary.dark,
          },
        },
      },
      variants: [
        {
          props: {
            color: 'primary',
          },
          style: {
            backgroundColor: palette.primary.main,
            color: palette.common.white,
            ':hover': {
              backgroundColor: palette.primary.dark,
              color: palette.common.white,
            },
          },
        },
        {
          props: {
            color: 'secondary',
          },
          style: {
            backgroundColor: palette.secondary.main,
          },
        },
        {
          props: {
            size: 'small',
          },
          style: {
            padding: 2,
          },
        },
      ],
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: palette.background.background01,
          padding: '4px 24px',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: palette.border.border01,
          },
          ':hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: palette.primary.shadow,
            },
          },
          '&.Mui-focused': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: palette.primary.shadow,
            },
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: palette.textField.background,
          borderRadius: '6px 6px 0 0',
          fontSize: typography.body2.fontSize,
          '.MuiFilledInput-input': {
            padding: '16px',
          },
          '&.Mui-focused': {
            backgroundColor: palette.textField.backgroundHover,
          },
          '&.Mui-disabled': {
            backgroundColor: palette.textField.background,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: typography.label3.fontFamily,
          fontSize: typography.label3.fontSize,
        },
      },
      variants: [
        {
          props: {
            variant: 'filled',
          },
          style: {
            transform: 'none',
            position: 'relative',
          },
        },
      ],
    },
    MuiBadge: {
      styleOverrides: {
        root: {
          color: palette.common.white,
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 'none',
          borderRadius: 0,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          overflow: 'hidden',
        },
        columnHeaders: {
          fontFamily: getFontFamily('LibreFranklin-SemiBold'),
          backgroundColor: palette.background.background03,
        },
        columnHeader: {
          padding: '0 32px',
        },
        columnSeparator: {
          display: 'none',
        },
        row: {
          '&.MuiDataGrid-row--lastVisible .MuiDataGrid-cell': {
            borderColor: palette.border.border01,
          },
        },
        cell: {
          padding: '16px 32px',
          borderColor: palette.border.border01,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
      variants: [
        {
          props: {
            color: 'pending',
          },
          style: {
            backgroundColor: palette.pending.main,
            color: palette.pending.contrastText,
          },
        },
        {
          props: {
            color: 'confirmed',
          },
          style: {
            backgroundColor: palette.confirmed.main,
            color: palette.confirmed.contrastText,
          },
        },
        {
          props: {
            color: 'declined',
          },
          style: {
            backgroundColor: palette.declined.main,
            color: palette.declined.contrastText,
          },
        },
        {
          props: {
            color: 'label',
          },
          style: {
            backgroundColor: palette.label.main,
            color: palette.label.contrastText,
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: typography.body1.fontFamily,
          textDecoration: 'none',
          ':hover': {
            color: palette.primary.dark,
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          fontFamily: typography.label3.fontFamily,
          fontSize: typography.label3.fontSize,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          width: 930,
          maxWidth: 930,
          borderRadius: 40,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontFamily: typography.h4.fontFamily,
          fontSize: typography.h4.fontSize,
          padding: 0,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: 0,
          justifyContent: 'center',
          '& .MuiButton-root:not(:first-of-type)': {
            marginLeft: 24,
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          justifyContent: 'start',
          color: 'text.primary',
          '&:active, &:focus': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          '.MuiFormControlLabel-label': {
            fontFamily: typography.label2.fontFamily,
            fontSize: typography.label2.fontSize,
          },
        },
      },
    },
  },
})
