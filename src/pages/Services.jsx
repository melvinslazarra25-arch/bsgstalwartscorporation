import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import ProcessSteps from '../components/ProcessSteps'
import CTASection from '../components/CTASection'
import { services } from '../data/services'

export default function Services() {
  return <>
    <SEO title="Engineering Services | BSG-Stalwarts Corporation" description="Explore HVAC/R, MEPF, operations and maintenance, engineering products, and project management services." path="/services" />
    <PageHero eyebrow="Services" title="Engineering Services for Commercial and Industrial Facilities" description="From HVAC/R and MEPF contracting to maintenance, products, and project support, BSG-Stalwarts provides practical engineering solutions for business needs." />
    <section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading title="Complete Service Capabilities" description="Choose a service category below to view detailed inclusions, common problems solved, and inquiry options." /><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map(s => <ServiceCard key={s.title} service={s}/>)}</div></div></section>
    <section className="bg-white py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading centered eyebrow="Process" title="Our Service Process" description="A clear workflow for inquiries, assessments, proposals, execution, and maintenance support." /><div className="mt-12"><ProcessSteps steps={['Inquiry','Site Assessment','Proposal / Quotation','Project Execution','Testing / Inspection','Maintenance / Support']} /></div></div></section>
    <CTASection title="Need help with an engineering project or facility system?" />
  </>
}
