export function Title({ title }: { title: string }) {
  return (
    <div className="text-5xl border-b-4 font-bold text-evergreen border-b-evergreen-light w-fit">{title}</div>
  )
}