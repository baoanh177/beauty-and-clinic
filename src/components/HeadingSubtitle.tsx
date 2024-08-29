import clsx from "clsx"
import { PropsWithChildren } from "react"

interface IHeadingSubtitleProps extends PropsWithChildren {
  className?: string
}

const HeadingSubtitle = ({ children, className }: IHeadingSubtitleProps) => {
  return <>
    <div className={clsx("font-semibold leading-5 text-[#FF64AE]", className)}>{children}</div>
  </>
}

export default HeadingSubtitle