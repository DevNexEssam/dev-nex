import TitleSections from "@/components/ui/title-section/TitleSections"
import CardService from "./CardService"
import { SERVICES_DATA } from "./ServicesData"

const Services = () => {
  return (
    <section className="bg-bg_main h-max md:h-screen">
      <div className="circle top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container">
        <TitleSections title="Our Premium Services" />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {SERVICES_DATA.map((item) =>(
          <CardService key={item.id} title={item.tilte} desc={item.desc} num={item.num} />
        ))}
        </div>
        </div>
    </section>
  )
}

export default Services
