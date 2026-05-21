import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import QuoteForm from '../components/QuoteForm'

export default function RequestQuote() {
  return <>
    <SEO title="Request a Quote | BSG-Stalwarts Corporation" description="Request a quote for HVAC/R, MEPF, operations and maintenance, engineering products, and project management services." path="/request-a-quote" />
    <PageHero eyebrow="Request a Quote" title="Tell Us About Your Project or Facility Requirement" description="Use this form to request service pricing, site inspection, product quotation, or project consultation." primaryCta="Contact Us" primaryTo="/contact" />
    <section className="py-20"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><QuoteForm /></div></section>
  </>
}
