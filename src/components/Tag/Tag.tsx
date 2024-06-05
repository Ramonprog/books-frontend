import classNames from "classnames"
import { useCallback } from "react"

type TagProps = {
  title: string,
  className?: string

}

export function Tag({ title, className }: TagProps) {

  const randomColors = useCallback(() => {
    const hue = Math.floor(Math.random() * 360)
    const lightness = `hsl(${hue}, 100%, 95%)`
    const darknes = `hsl(${hue}, 100%, 20%)`
    return { lightness, darknes }
  }, [])

  return (
    <p style={{ backgroundColor: randomColors().lightness, color: randomColors().darknes }} className={classNames(['rounded-full text-center w-fit px-3 py-1', className])}>{title}</p>
  )
}