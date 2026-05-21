import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import { siteConfig } from '../utils/siteConfig'

export default function Contact() {
  return <>
    <SEO title="Contact BSG-Stalwarts Corporation | Engineering Contractor in Cavite" description="Contact BSG-Stalwarts Corporation for HVAC/R, MEPF, maintenance, engineering products, and project inquiries." path="/contact" />
    <PageHero eyebrow="Contact" title="Contact Our Engineering Team" description="Send an inquiry, request a quote, or connect through phone, email, Facebook, or Messenger." />
    <section className="py-20"><div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div className="grid gap-4">{[[MapPin, siteConfig.address], [Phone, siteConfig.phone], [Mail, siteConfig.email], [MessageCircle, 'Facebook Messenger']].map(([Icon, text]) => <div key={text} className="flex gap-4 rounded-2xl bg-white p-6 shadow-card"><Icon className="h-6 w-6 text-accent" /><span className="font-bold text-navy">{text}</span></div>)}<div className="placeholder-grid flex h-80 items-center justify-center rounded-3xl bg-gradient-to-br from-navy to-navy2 text-white">Google Maps Placeholder</div></div><ContactForm /></div></section>
  </>
}
