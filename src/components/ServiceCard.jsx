import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ service }) {
  const Icon = service.icon
  return (
    <Link to={service.slug} className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-accent/40">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-extrabold text-navy">{service.title}</h3>
      <p className="mt-3 min-h-20 leading-7 text-slate-600">{service.description}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent">Learn More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
    </Link>
  )
}
