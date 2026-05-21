import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import IndustryCard from '../components/IndustryCard'
import CTASection from '../components/CTASection'
import { industries } from '../data/industries'

export default function Industries() {
  return <>
    <SEO title="Industries Served | BSG-Stalwarts Corporation" description="Engineering, HVAC/R, MEPF, and maintenance support for commercial and industrial sectors." path="/industries" />
    <PageHero eyebrow="Industries" title="Supporting Facilities Across Commercial and Industrial Sectors" description="BSG-Stalwarts provides engineering support for buildings, plants, warehouses, offices, and property management operations." />
    <section className="py-20"><div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">{industries.map(i => <IndustryCard key={i.title} industry={i} />)}</div></section>
    <CTASection title="Need engineering support for your industry?" />
  </>
}
