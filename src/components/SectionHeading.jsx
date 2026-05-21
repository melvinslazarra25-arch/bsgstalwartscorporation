export default function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.25em] text-accent">{eyebrow}</p>}
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{description}</p>}
    </div>
  )
}
