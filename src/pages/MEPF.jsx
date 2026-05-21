import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ProcessSteps from '../components/ProcessSteps'
import ProjectCard from '../components/ProjectCard'
import CTASection from '../components/CTASection'
import { projects } from '../data/projects'

const inclusions = ['Mechanical works', 'Electrical works', 'Plumbing works', 'Fire protection works', 'Technical coordination', 'Testing and turnover']
const problems = ['Multi-discipline project needs', 'Site coordination gaps', 'Facility system installation', 'Maintenance requirements']
const steps = ['Requirement review', 'Site inspection', 'Technical planning', 'Quotation and approval', 'Installation / execution', 'Testing and turnover']

export default function ServicePage() {
  return <>
    <SEO title='MEPF Contractor Philippines | BSG-Stalwarts Corporation' description='Mechanical, electrical, plumbing, and fire protection contracting services for commercial and industrial projects.' path='/services/mepf-contracting' />
    <PageHero eyebrow='MEPF Contracting' title='MEPF Contracting Services for Commercial and Industrial Projects' description='Mechanical, electrical, plumbing, and fire protection works for facilities, buildings, and project sites.' primaryCta="Request Service Quote" secondaryCta="View Projects" secondaryTo="/projects" />
    <section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading title="Service Overview" description='Mechanical, electrical, plumbing, and fire protection works for facilities, buildings, and project sites.' /><div className="mt-10 grid gap-4 md:grid-cols-3">{inclusions.map(i => <div key={i} className="rounded-2xl bg-white p-6 font-bold text-navy shadow-card">{i}</div>)}</div></div></section>
    <section className="bg-white py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading title="Common Problems We Solve" description="These are common client concerns this service can support." /><div className="mt-10 grid gap-4 md:grid-cols-2">{problems.map(p => <div key={p} className="rounded-2xl border border-slate-200 p-5 text-slate-700">{p}</div>)}</div></div></section>
    <section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading centered eyebrow="Process" title="How This Service Works" /><div className="mt-12"><ProcessSteps steps={steps} /></div></div></section>
    <section className="bg-white py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading title="Related Projects" description="Replace sample cards with real project photos and details." /><div className="mt-12 grid gap-6 lg:grid-cols-3">{projects.slice(0,3).map(p => <ProjectCard key={p.title} project={p} />)}</div></div></section>
    <CTASection title="Need support for this service?" buttonText="Request a Quote" />
  </>
}
