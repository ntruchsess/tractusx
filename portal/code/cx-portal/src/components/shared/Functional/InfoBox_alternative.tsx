import { useEffect, useRef, ReactNode } from 'react'

interface InfoBoxProps {
  onClickOutside?: Function,
  show?: boolean,
  element?: ReactNode
}

export default function InfoBox_alternative({ onClickOutside, show, element }: InfoBoxProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: TouchEvent | MouseEvent): void => {
      let target = event.target as HTMLDivElement
      if (ref.current && !ref.current.contains(target)) {
        onClickOutside && onClickOutside()
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [onClickOutside])


  return (
    <>
      {
        show && <div ref={ref} className='info-box'>
          {element}
        </div>
      }
    </>
  )
}
