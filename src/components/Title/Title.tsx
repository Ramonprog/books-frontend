import classNames from "classnames";

type TitleProps = {
  title: string;
  className?: string;
}

export function Title({ title, className }: TitleProps) {
  return (
    <div className={classNames([
      "md:text-5xl text-2xl border-b-4 font-bold text-evergreen border-b-evergreen-light w-fit",
      className
    ])}>{title}</div>
  )
}