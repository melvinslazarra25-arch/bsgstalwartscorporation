import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SEO from '../components/SEO'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import IndustryCard from '../components/IndustryCard'
import CTASection from '../components/CTASection'
import TrustBadges from '../components/TrustBadges'
import { services } from '../data/services'
import { projects } from '../data/projects'
import { industries } from '../data/industries'

export default function Home() {
  return <>
    <SEO title="BSG-Stalwarts Corporation | Engineering Contractor in Cavite" description="BSG-Stalwarts Corporation provides HVAC/R, MEPF, operations and maintenance, engineering products, and project management services for commercial and industrial clients." />
    <section className="relative overflow-hidden bg-navy py-24 text-white md:py-32">
      <div className="absolute inset-0 placeholder-grid opacity-30" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.25em] text-orange-200">Engineering • HVAC/R • MEPF • Maintenance</p>
          <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">Reliable Engineering, HVAC/R, and MEPF Solutions for Commercial and Industrial Projects</h1>
          <p className="mt-6 text-lg leading-8 text-slate-200">BSG-Stalwarts Corporation provides electromechanical contracting, HVAC/R services, MEPF works, operations and maintenance, engineering products, and project management solutions.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button to="/request-a-quote">Request a Quote</Button><Button to="/services" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">View Services</Button></div>
        </div>
        <div className="placeholder-grid hidden min-h-96 rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl lg:block"><div className="flex h-full items-end rounded-2xl bg-gradient-to-br from-white/10 to-accent/20 p-6"><p className="text-sm font-bold uppercase tracking-widest text-white/80">Replace with real project or team photo</p></div></div>
      </div>
    </section>

    <section className="py-20"><div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div><SectionHeading eyebrow="Company Overview" title="Engineering Support Built for Business Operations" description="Based in Dasmariñas City, Cavite, BSG-Stalwarts Corporation supports commercial and industrial clients with reliable engineering services, HVAC/R solutions, MEPF contracting, and maintenance support." /><div className="mt-8"><Button to="/about" variant="secondary">Learn More About Us</Button></div></div>
      <div className="placeholder-grid h-80 rounded-3xl bg-gradient-to-br from-navy to-navy2 shadow-card" />
    </div></section>

    <section className="bg-white py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading centered eyebrow="Services" title="Our Engineering Services" description="Complete engineering support for commercial buildings, industrial facilities, and maintenance operations." /><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map(s => <ServiceCard key={s.title} service={s} />)}</div></div></section>

    <section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading centered eyebrow="Why Choose Us" title="Reliable Support for Critical Facility Systems" description="Our service approach focuses on practical solutions, technical support, and long-term facility reliability." /><div className="mt-10"><TrustBadges /></div></div></section>

    <section className="bg-navy py-20 text-white"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><p className="text-sm font-extrabold uppercase tracking-[0.25em] text-orange-200">Operations & Maintenance</p><h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Prevent Downtime with Reliable Maintenance Support</h2><p className="mt-5 text-lg leading-8 text-slate-200">Keep your HVAC/R, mechanical, electrical, plumbing, and facility systems operating efficiently with scheduled inspections, corrective support, and service reporting.</p><div className="mt-8"><Button to="/services/operations-maintenance">Request Maintenance Plan</Button></div></div><div className="grid gap-4">{['Preventive maintenance scheduling','Corrective maintenance response','Equipment inspection and reports','Facility support for commercial and industrial systems'].map(item => <div key={item} className="flex gap-3 rounded-2xl bg-white/10 p-5"><CheckCircle2 className="h-6 w-6 text-accent" /><span className="font-bold">{item}</span></div>)}</div></div></section>

    <section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Featured Projects" title="Project and Maintenance Experience" description="Use this section to showcase completed projects, ongoing maintenance contracts, and real work photos." /><div className="mt-12 grid gap-6 lg:grid-cols-3">{projects.slice(0,3).map(p => <ProjectCard key={p.title} project={p} />)}</div><div className="mt-8"><Button to="/projects" variant="secondary">View All Projects</Button></div></div></section>

    <section className="bg-white py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading centered eyebrow="Industries" title="Industries Served" description="Engineering, HVAC/R, MEPF, and maintenance support for facilities that need dependable systems." /><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{industries.map(i => <IndustryCard key={i.title} industry={i} />)}</div></div></section>

    <section className="py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="rounded-3xl bg-white p-8 shadow-card"><SectionHeading title="Credentials and Trust" description="Add verified business permits, safety certificates, technical qualifications, supplier partnerships, and client accreditations here." /><div className="mt-8 grid gap-4 md:grid-cols-3">{['Business Permits','Safety Documents','Technical Certifications'].map(x => <div key={x} className="rounded-2xl bg-slate-50 p-5 font-bold text-navy">{x}</div>)}</div></div></div></section>
    <CTASection />
  </>
}
