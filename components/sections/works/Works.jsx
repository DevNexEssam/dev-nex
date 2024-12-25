import TitleSections from "@/components/ui/title-section/TitleSections"
import { WORKS_DATA } from "./WorkData"
import WorkCard from "./WorkCard"

const Works = () => {
  return (
    <section id="portfolio" className="">
      <div className="circle top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container">
        <TitleSections title="My Latest Creations" />
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2">
            {WORKS_DATA.map((item) => (
                <WorkCard key={item.id} title={item.title} desc={item.description} image={item.image} demo={item.demo} code={item.code} />
            ))}
        </div>
        </div>
    </section>
  )
}

export default Works
