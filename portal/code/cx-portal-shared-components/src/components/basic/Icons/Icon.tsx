import Icons from './Icons.svg';
import './Icon.scss';

interface IconProps {
  name: string,
  color: string,
  size?: number;
}

export const Icon = ({
  name = 'add',
  color = '#000',
  size = 24,
}: IconProps) => {

  return (
    <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
      <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
  )
}