export default function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
      <div className="placeholder-grid flex h-44 items-center justify-center bg-gradient-to-br from-navy to-navy2 text-sm font-bold uppercase tracking-widest text-white/80">Project Photo</div>
      <div className="p-6">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">{project.category}</p>
        <h3 className="mt-2 text-xl font-extrabold text-navy">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-500">{project.location} • {project.industry}</p>
        <p className="mt-4 leading-7 text-slate-600">{project.scope}</p>
        <dl className="mt-5 grid gap-3 text-sm">
          <div><dt className="font-bold text-navy">Duration</dt><dd className="text-slate-600">{project.duration}</dd></div>
          <div><dt className="font-bold text-navy">System</dt><dd className="text-slate-600">{project.system}</dd></div>
          <div><dt className="font-bold text-navy">Result</dt><dd className="text-slate-600">{project.result}</dd></div>
        </dl>
      </div>
    </article>
  )
}
