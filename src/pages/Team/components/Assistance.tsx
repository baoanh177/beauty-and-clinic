import HeadingDesc from "@/components/HeadingDesc"
import HeadingSubtitle from "@/components/HeadingSubtitle"
import HeadingTitle from "@/components/HeadingTitle"

const Assistance = () => {
  return <>
    <section className="mt-[154.3px]">
      <div className="container">
        <div className="flex flex-col items-center">
          <HeadingSubtitle children="Assistance Team"/>
          <HeadingTitle children="Meet the pro assistance" className="min-h-[57px] mt-3"/>
          <HeadingDesc children="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam." className="min-h-[28px] mt-3"/>
        </div>
      </div>
    </section>
  </>
}

export default Assistance