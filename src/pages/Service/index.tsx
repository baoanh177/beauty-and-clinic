import Consultation from "./components/Consultation"
import FAQ from "./components/FAQ"
import Product from "./components/Product"
import Responsibility from "./components/Responsibility"
import ServiceSection from "./components/ServiceSection"
import Treatment from "./components/Treatment"

const Service = () => {
  return <>
    <ServiceSection />
    <Consultation />
    <Treatment />
    <Product />
    <Responsibility />
    <FAQ />
  </>
}

export default Service