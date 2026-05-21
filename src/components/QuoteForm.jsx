import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

const serviceOptions = ['HVAC/R Services','MEPF Contracting','Operations & Maintenance','Engineering Products','Project Management','Other']
export default function QuoteForm() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ fullName:'', company:'', email:'', phone:'', location:'', service:'', projectType:'', schedule:'', description:'', contactMethod:'Email' })
  const [errors, setErrors] = useState({})
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const required = ['fullName','email','phone','location','service','description']
    const next = {}
    required.forEach((field) => { if (!form[field]) next[field] = 'This field is required.' })
    setErrors(next)
    if (Object.keys(next).length === 0) navigate('/thank-you')
  }
  return <form onSubmit={submit} className="grid gap-4 rounded-2xl bg-white p-6 shadow-card md:grid-cols-2">
    <label className="grid gap-2 text-sm font-bold text-navy">Full Name<input name="fullName" value={form.fullName} onChange={update} className="rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-accent" />{errors.fullName && <span className="text-xs text-red-600">{errors.fullName}</span>}</label>
    <label className="grid gap-2 text-sm font-bold text-navy">Company Name<input name="company" value={form.company} onChange={update} className="rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-accent" /></label>
    <label className="grid gap-2 text-sm font-bold text-navy">Email<input name="email" type="email" value={form.email} onChange={update} className="rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-accent" />{errors.email && <span className="text-xs text-red-600">{errors.email}</span>}</label>
    <label className="grid gap-2 text-sm font-bold text-navy">Phone<input name="phone" value={form.phone} onChange={update} className="rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-accent" />{errors.phone && <span className="text-xs text-red-600">{errors.phone}</span>}</label>
    <label className="grid gap-2 text-sm font-bold text-navy">Project Location<input name="location" value={form.location} onChange={update} className="rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-accent" />{errors.location && <span className="text-xs text-red-600">{errors.location}</span>}</label>
    <label className="grid gap-2 text-sm font-bold text-navy">Service Needed<select name="service" value={form.service} onChange={update} className="rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-accent"><option value="">Select service</option>{serviceOptions.map(o => <option key={o}>{o}</option>)}</select>{errors.service && <span className="text-xs text-red-600">{errors.service}</span>}</label>
    <label className="grid gap-2 text-sm font-bold text-navy">Project Type<input name="projectType" value={form.projectType} onChange={update} className="rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-accent" /></label>
    <label className="grid gap-2 text-sm font-bold text-navy">Preferred Schedule<input name="schedule" value={form.schedule} onChange={update} className="rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-accent" /></label>
    <label className="grid gap-2 text-sm font-bold text-navy md:col-span-2">Project Description<textarea name="description" rows="5" value={form.description} onChange={update} className="rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-accent" />{errors.description && <span className="text-xs text-red-600">{errors.description}</span>}</label>
    <div className="rounded-xl border border-dashed border-slate-300 p-4 text-sm text-slate-600 md:col-span-2">File upload placeholder: connect to backend storage or form service later.</div>
    <label className="grid gap-2 text-sm font-bold text-navy">Preferred Contact Method<select name="contactMethod" value={form.contactMethod} onChange={update} className="rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-accent"><option>Email</option><option>Phone</option><option>Messenger</option></select></label>
    <div className="md:col-span-2"><Button type="submit">Submit Quote Request</Button></div>
  </form>
}
