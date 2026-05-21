import { CheckCircle2 } from 'lucide-react'

const badges = ['Commercial & Industrial Focus', 'HVAC/R and MEPF Capability', 'Preventive Maintenance Support', 'Safety and Quality Mindset']

export default function TrustBadges() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {badges.map((badge) => (
        <div key={badge} className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow-card">
          <CheckCircle2 className="h-6 w-6 text-accent" />
          <span className="font-bold text-navy">{badge}</span>
        </div>
      ))}
    </div>
  )
}
