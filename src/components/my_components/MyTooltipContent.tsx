type TooltipContentProps = {
  title: string,
  description: string
}

export const MyTooltipContent = ({title, description} : TooltipContentProps) => {
  return (
    <div className="flex flex-col gap-1 items-center max-w-36 p-2">
      <p className="font-bold text-[12px] ">{title}</p>
      <p className="text-center text-[12px] leading-[14px]">{description}</p>
    </div>
  )
}
