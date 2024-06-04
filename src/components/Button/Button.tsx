import classNames from "classnames"

type Props = {
  title: string,
  className?: string,
  variant?: 'light' | 'dark',
  onClick?: (title: unknown) => void;

}

export function Button({ title, className, variant = 'dark', onClick }: Props) {
  return (
    <button className={classNames([
      'bg-evergreen-light px-5 py-3 rounded-lg mt-3  shadow text-white font-medium',
      variant === 'dark' && 'bg-evergreen-light',
      variant === 'light' && 'bg-white border-2 border-evergreen-light text-evergreen-light',
      className
    ])}
      onClick={onClick}
    >
      {title}
    </button>
  )
}