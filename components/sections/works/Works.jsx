import TitleSections from "@/components/ui/title-section/TitleSections"
import { WORKS_DATA } from "./WorkData"
import WorkCard from "./WorkCard"

const Works = () => {
  return (
    <section className="h-screen">
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
