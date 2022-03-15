import { useEffect, useRef, ReactNode } from 'react'

type MouseEventHandler = (e?: MouseEvent) => void

interface InfoBoxProps {
  onClickOutside?: MouseEventHandler
  show?: boolean
  element?: ReactNode
}

export default function InfoBox({
  onClickOutside,
  show,
  element,
}: InfoBoxProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: TouchEvent | MouseEvent): void => {
      const target = event.target as HTMLDivElement
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
      {show && (
        <div ref={ref} className="info-box">
          {element}
        </div>
      )}
    </>
  )
}
