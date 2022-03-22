import CustomIcons from './Icons.svg';
import './Icon.scss';

interface CustomIconProps {
  name: string,
  fillColor?: string,
  strokeColor?: string,
  size?: number;
}
export const CustomIcon = ({
  name,
  fillColor,
  strokeColor,
  size,
}: CustomIconProps) => {

  return (
    <svg className={`icon icon-${name}`} stroke={strokeColor} fill={fillColor} width={size} height={size}>
      <use xlinkHref={`${CustomIcons}#icon-${name}`} />
    </svg>
  )
}