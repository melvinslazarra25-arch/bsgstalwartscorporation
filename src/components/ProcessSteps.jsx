export default function ProcessSteps({ steps }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {steps.map((step, index) => (
        <div key={step} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-white">{index + 1}</div>
          <p className="font-bold text-navy">{step}</p>
        </div>
      ))}
    </div>
  )
}
