import { useCallback } from "react"

export function Tag({ title }: { title: string }) {

  const randomColors = useCallback(() => {
    const hue = Math.floor(Math.random() * 360)
    const lightness = `hsl(${hue}, 100%, 95%)`
    const darknes = `hsl(${hue}, 100%, 20%)`
    return { lightness, darknes }
  }, [])

  return (
    <p style={{ backgroundColor: randomColors().lightness, color: randomColors().darknes }} className="rounded-full text-center w-fit px-3 py-1">{title}</p>
  )
}