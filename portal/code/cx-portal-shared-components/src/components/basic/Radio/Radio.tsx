import uniqueId from 'lodash/uniqueId';
import { useRef } from 'react';
import './Radio.scss';

interface RadioProps {
  value: string | number;
  label?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler;
}

export const Radio = ({
  value,
  label,
  ...props
}: RadioProps) => {
  const { current: id } = useRef(uniqueId('radio-'));

  return (
    <span>
      <input
        id={id}
        type="radio"
        value={value}
        {...props} />
      {label && <label htmlFor={id}>{label}</label>}
    </span>
  )
}
