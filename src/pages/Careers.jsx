import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CareerForm from '../components/CareerForm'

const positions = ['HVAC Technician','AC Technician','Electrical Technician','Project Engineer','Maintenance Technician','Admin Staff']
export default function Careers() {
  return <>
    <SEO title="Careers | BSG-Stalwarts Corporation" description="Apply for engineering, HVAC/R, technical, maintenance, and admin roles at BSG-Stalwarts Corporation." path="/careers" />
    <PageHero eyebrow="Careers" title="Build Your Career with BSG-Stalwarts Corporation" description="Submit your application for technical, engineering, maintenance, and administrative roles." primaryCta="Apply Now" primaryTo="#application" />
    <section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading title="Open Positions" description="These are sample positions. Replace with current hiring openings." /><div className="mt-10 grid gap-4 md:grid-cols-3">{positions.map(p => <div key={p} className="rounded-2xl bg-white p-6 font-bold text-navy shadow-card">{p}</div>)}</div></div></section>
    <section id="application" className="bg-white py-20"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><SectionHeading centered title="Application Form" description="This form is ready for future backend integration." /><div className="mt-10"><CareerForm /></div></div></section>
  </>
}
