import classnames from 'classnames';
import './Button.scss';

interface ButtonProps {
  children: React.ReactNode;
  style?: 'primary' | 'secondary' | 'outlined' | 'text';
  size?: 'large' | 'medium' | 'small';
}

export const Button = ({
  style = 'primary',
  size = 'large',
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={classnames('button', `button-${style}`, `button-${size}`)}
      {...props}
    >
      {children}
    </button>
  )
}
