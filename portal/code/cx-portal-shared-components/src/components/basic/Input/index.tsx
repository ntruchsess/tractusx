import {
  TextField,
  TextFieldProps,
  FormHelperText,
  InputLabel,
  InputAdornment,
  Box,
  FormControl,
} from '@mui/material'
import ErrorOutline from '@mui/icons-material/ErrorOutline'

interface InputProps extends Omit<TextFieldProps, 'variant'> {
  variant?: 'filled'
}

export const Input = ({
  variant = 'filled',
  label = 'Label demo',
  placeholder = 'Input demo',
  helperText = 'Some text',
  error = false,
  ...props
}: InputProps) => {
  return (
    <Box>
      <FormControl
        sx={{
          width: '100%',
        }}
        error={error}
        variant="filled"
      >
        <InputLabel
          sx={{
            position: 'relative',
            transform: 'none',
            fontSize: 14,
            fontWeight: 'bold',
          }}
        >
          {label}
        </InputLabel>
        <TextField
          variant={variant}
          placeholder={placeholder}
          error={error}
          InputProps={
            error
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <ErrorOutline color="error" />
                    </InputAdornment>
                  ),
                }
              : {}
          }
          {...props}
        />
        <FormHelperText
          sx={{
            marginLeft: 0,
            fontSize: 12,
          }}
        >
          {error ? helperText : ''}
        </FormHelperText>
      </FormControl>
    </Box>
  )
}
