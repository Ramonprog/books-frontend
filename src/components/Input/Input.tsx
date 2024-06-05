import { forwardRef } from "react"

type Props = {
  placeholder?: string
}

export const Input = forwardRef<HTMLInputElement, Props>(({ placeholder, ...rest }: Props, ref) => {
  return (
    <input ref={ref} placeholder={placeholder} {...rest} type="text" className="outline-none border shadow-lg border-gray-200 rounded-lg w-full p-3 mt-3" />
  )
})