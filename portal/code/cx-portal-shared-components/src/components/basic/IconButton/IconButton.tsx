import classnames from 'classnames';
import { ButtonProps } from '../Button/Button';
import './IconButton.scss';

interface IconButtonProps extends Omit<ButtonProps, 'size'> {
  size?: 'medium' | 'small';
}

export const IconButton = ({
  variant = 'primary',
  size = 'medium',
  href,
  disabled,
  children,
  ...props
}: IconButtonProps) => {
  const className = classnames('icon-button', `icon-button-${variant}`, `icon-button-${size}`, {'icon-button-disabled': disabled});

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

