interface LogoProps {
  type: 'standard' | 'short' | 'text'
}

export const Logo = ({ type = 'standard', ...props }: LogoProps) => {
  let image, altText

  switch (type) {
    case 'short':
      image = '/cx-logo-short.svg'
      altText = 'CatenaX short logo'
      break
    case 'text':
      image = '/cx-logo-text.svg'
      altText = 'CatenaX logo with text'
      break
    default:
      image = '/cx-logo.svg'
      altText = 'CatenaX logo'
  }

  return <img className="logo-image" src={image} alt={altText} {...props} />
}
