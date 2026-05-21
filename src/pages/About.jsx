import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import TrustBadges from '../components/TrustBadges'
import CTASection from '../components/CTASection'

export default function About() {
  return <>
    <SEO title="About BSG-Stalwarts Corporation | Engineering Company in Cavite" description="Learn about BSG-Stalwarts Corporation, an engineering contracting company based in Dasmariñas City, Cavite." path="/about" />
    <PageHero eyebrow="About Us" title="Engineering Services Built on Reliability, Practical Support, and Professional Execution" description="BSG-Stalwarts Corporation supports commercial and industrial clients through HVAC/R, MEPF, operations and maintenance, products, and project management services." secondaryCta="View Services" secondaryTo="/services" />
    <section className="py-20"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><SectionHeading eyebrow="Company Profile" title="Based in Dasmariñas City, Serving Commercial and Industrial Clients" description="The company website should present verified company history, leadership, technical strengths, and project experience. Replace this editable placeholder with the final approved company profile." /><div className="mt-8 grid gap-4"><p className="leading-7 text-slate-600">BSG-Stalwarts Corporation provides engineering contracting solutions for business facilities requiring dependable HVAC/R, MEPF, and maintenance support.</p><p className="leading-7 text-slate-600">The company focuses on practical execution, responsive coordination, and facility reliability for commercial and industrial environments.</p></div></div><div className="placeholder-grid min-h-96 rounded-3xl bg-gradient-to-br from-navy to-navy2" /></div></section>
    <section className="bg-white py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading centered eyebrow="Commitment" title="Quality, Safety, and Technical Support" description="Use this section to add official mission, vision, values, safety policies, and certifications." /><div className="mt-10"><TrustBadges /></div></div></section>
    <CTASection title="Ready to Work with BSG-Stalwarts?" buttonText="Contact Our Team" buttonTo="/contact" />
  </>
}
