import classnames from 'classnames';
import './Button-radio.scss';

interface ButtonRadioProps {
  children: React.ReactNode;
  checked: true | false;
  value: string;
}

export const ButtonRadio = ({
  checked = true,
  value = 'value1',
  children,
  ...props
}: ButtonRadioProps) => {
  return (
    <label className={classnames('button-radio')}>
      <input 
        type="radio"
        {...props}
        value={value} 
        checked={checked} />
      <span>{children}</span>
    </label>
  )
}
