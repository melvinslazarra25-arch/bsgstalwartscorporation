export default function IndustryCard({ industry }) {
  const Icon = industry.icon
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-navy">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-extrabold text-navy">{industry.title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{industry.description}</p>
    </div>
  )
}
