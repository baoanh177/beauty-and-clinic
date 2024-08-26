import { PropsWithChildren } from "react"

const HeadingSubtitle = ({ children }: PropsWithChildren) => {
  return <>
    <div className="font-semibold leading-5 text-[#FF64AE]">{children}</div>
  </>
}

export default HeadingSubtitle