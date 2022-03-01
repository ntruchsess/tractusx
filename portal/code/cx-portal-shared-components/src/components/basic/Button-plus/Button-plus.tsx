import classnames from 'classnames';
import './Button-plus.scss';

interface ButtonProps {
  children: React.ReactNode;
  style?: 'primary' | 'secondary' | 'outlined' | 'text';
  size?: 'medium' | 'small';
  href?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
}

export const ButtonPlus = ({
  style = 'primary',
  size = 'medium',
  disabled,
  children,
  ...props
}: ButtonProps) => {
  const className = classnames('button-plus', `button-${style}`, `button-${size}`, {'button-disabled': disabled});

  return (
    <button
      type="button"
      className={className}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

