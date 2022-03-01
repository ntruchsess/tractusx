import classnames from 'classnames';
import './Button.scss';

interface ButtonProps {
  children: React.ReactNode;
  style?: 'primary' | 'secondary' | 'outlined' | 'text';
  size?: 'large' | 'medium' | 'small';
  href?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
}

export const Button = ({
  style = 'primary',
  size = 'large',
  href,
  disabled,
  children,
  ...props
}: ButtonProps) => {
  const className = classnames('button', `button-${style}`, `button-${size}`, {'button-disabled': disabled});

  return href
    ? (
      <a
        href={href}
        className={className}
        {...props}
      >
        {children}
      </a>
    ) : (
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
