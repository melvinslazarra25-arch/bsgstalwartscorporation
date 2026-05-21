import { useState } from 'react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import ProjectCard from '../components/ProjectCard'
import CTASection from '../components/CTASection'
import { projects } from '../data/projects'

const filters = ['All','HVAC/R','MEPF','Maintenance','Commercial','Industrial']
export default function Projects() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? projects : projects.filter(p => p.tags.includes(filter))
  return <>
    <SEO title="Projects and Portfolio | BSG-Stalwarts Corporation" description="View sample project cards for HVAC/R, MEPF, maintenance, commercial, and industrial work." path="/projects" />
    <PageHero eyebrow="Projects" title="Project Portfolio and Work Experience" description="Showcase completed projects, ongoing maintenance support, site photos, service scope, and delivered results." />
    <section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-10 flex flex-wrap gap-3">{filters.map(f => <button key={f} onClick={() => setFilter(f)} className={`rounded-xl px-4 py-2 text-sm font-bold ${filter === f ? 'bg-accent text-white' : 'bg-white text-navy shadow'}`}>{f}</button>)}</div><div className="grid gap-6 lg:grid-cols-3">{shown.map(p => <ProjectCard key={p.title} project={p} />)}</div></div></section>
    <CTASection title="Have a project similar to these examples?" />
  </>
}
