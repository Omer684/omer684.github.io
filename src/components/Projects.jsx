import { projects } from '../data/content'
import SectionHeader from './ui/SectionHeader'
import Pipeline from './Pipeline'
import CircularGallery from './ui/CircularGallery'

// Every shipped project → one bold heading on the orbit. The link is preserved
// (live demo if there is one, otherwise the repo) in the accessible mirror.
const projectItems = projects.map((p) => ({
  label: p.title,
  href: p.live || p.github,
  sr: `${p.title} — ${p.category}`,
}))

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-24 border-b border-line py-14 md:py-20">
      <div className="container-wide">
        <SectionHeader index="02" eyebrow="Selected work" title="Things I've shipped" />

        <Pipeline />

        <div className="mt-10 md:mt-14">
          <CircularGallery
            items={projectItems}
            bend={3}
            height={380}
            label="Selected projects — spinning gallery of titles"
            hint={`Drag to spin · ${projects.length} projects`}
          />
        </div>
      </div>
    </section>
  )
}
