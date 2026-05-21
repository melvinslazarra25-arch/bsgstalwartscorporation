import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

export default function PrivacyPolicy() {
  return <>
    <SEO title="Privacy Policy | BSG-Stalwarts Corporation" description="Privacy policy for BSG-Stalwarts Corporation website forms and visitor information." path="/privacy-policy" />
    <PageHero eyebrow="Privacy Policy" title="Privacy Policy" description="This page explains how website inquiries and form information should be handled." primaryCta="Contact Us" primaryTo="/contact" />
    <section className="py-20"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><div className="rounded-2xl bg-white p-8 leading-8 text-slate-700 shadow-card"><h2 className="text-2xl font-extrabold text-navy">Information We Collect</h2><p className="mt-4">This website may collect information submitted through contact, quote request, and careers forms, including name, email, phone number, company name, project details, and application details.</p><h2 className="mt-8 text-2xl font-extrabold text-navy">How Information Is Used</h2><p className="mt-4">Information is used to respond to inquiries, prepare quotations, process applications, and improve communication with website visitors.</p><h2 className="mt-8 text-2xl font-extrabold text-navy">Contact</h2><p className="mt-4">For privacy-related concerns, contact BSG-Stalwarts Corporation through the official contact details listed on this website.</p></div></div></section>
  </>
}
