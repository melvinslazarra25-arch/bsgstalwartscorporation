import SEO from '../components/SEO'
import Button from '../components/Button'

export default function ThankYou() {
  return <>
    <SEO title="Thank You | BSG-Stalwarts Corporation" description="Thank you for contacting BSG-Stalwarts Corporation." path="/thank-you" />
    <section className="py-28"><div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"><h1 className="text-4xl font-extrabold text-navy md:text-5xl">Thank you for contacting BSG-Stalwarts Corporation.</h1><p className="mt-5 text-lg leading-8 text-slate-600">Our team will review your inquiry and get back to you as soon as possible.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button to="/">Back to Home</Button><Button to="/services" variant="outline">View Services</Button></div></div></section>
  </>
}
