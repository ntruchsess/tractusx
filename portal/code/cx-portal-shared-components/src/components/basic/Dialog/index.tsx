import MuiDialog, { DialogProps as MuiDialogProps } from '@mui/material/Dialog'

export type DialogProps = Pick<MuiDialogProps, 'open' | 'scroll'>

export const Dialog = ({ scroll = 'body', ...props }: DialogProps) => {
  return <MuiDialog scroll={scroll} {...props} />
}
