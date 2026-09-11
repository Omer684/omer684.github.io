import { BadgeCheck } from 'lucide-react'
import { certifications } from '../data/content'
import CircularGallery from './ui/CircularGallery'

// Cert name → bold heading on the orbit; issuer + date live in the accessible
// mirror so nothing is lost for screen readers or reduced-motion users.
const certItems = certifications.map((c) => ({
  label: c.name,
  sr: `${c.name} — ${c.issuer}, ${c.date}`,
}))

export default function Certifications() {
  return (
    <section className="border-b border-line bg-paper py-14 md:py-20">
      <div className="container-wide">
        <div className="flex items-center gap-3">
          <BadgeCheck size={16} className="text-accent" />
          <span className="label">Certifications</span>
          <span className="label text-subtle">· {certifications.length}</span>
          <span className="h-px flex-1 bg-line" />
        </div>

        <div className="mt-8 md:mt-12">
          <CircularGallery
            items={certItems}
            bend={3}
            height={340}
            label="Certifications — spinning gallery"
            hint={`Drag to spin · ${certifications.length} certifications`}
          />
        </div>
      </div>
    </section>
  )
}
