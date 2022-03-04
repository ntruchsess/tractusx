import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface TypeIcons {
    icon01: string
    icon02: string
    icon03: string
  }

  interface TypeBorders {
    border01: string
    border02: string
    border03: string
  }

  interface TypeBackground {
    background01: string
    background02: string
    background03: string
    background04: string
    background05: string
    background06: string
    background07: string
    background08: string
    background09: string
    background10: string
  }

  interface Palette {
    icon: TypeIcons
    border: TypeBorders
    background: TypeBackground
  }
  interface PaletteOptions {
    icon?: Partial<TypeIcons>
    border?: Partial<TypeBorders>
    background?: Partial<TypeBackground>
  }
}
