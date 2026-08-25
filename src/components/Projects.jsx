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
    <section id="work" className="scroll-mt-24 border-b border-line py-24 md:py-32">
      <div className="container-wide">
        <SectionHeader index="02" eyebrow="Selected work" title="Things I've shipped" />

        <Pipeline />

        <div className="mt-16 md:mt-24">
          <CircularGallery
            items={projectItems}
            bend={3}
            height={480}
            label="Selected projects — spinning gallery of titles"
            hint={`Drag to spin · ${projects.length} projects`}
          />
        </div>
      </div>
    </section>
  )
}
