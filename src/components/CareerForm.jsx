import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

export default function CareerForm() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name:'', email:'', phone:'', position:'', experience:'', certifications:'', message:'' })
  const [errors, setErrors] = useState({})
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const next = {}
    ;['name','email','phone','position'].forEach((f) => { if (!form[f]) next[f] = 'This field is required.' })
    setErrors(next)
    if (Object.keys(next).length === 0) navigate('/thank-you')
  }
  return <form onSubmit={submit} className="grid gap-4 rounded-2xl bg-white p-6 shadow-card md:grid-cols-2">
    {[
      ['name','Full Name'],['email','Email'],['phone','Phone'],['position','Position Applied For'],['experience','Years of Experience'],['certifications','Certifications']
    ].map(([name,label]) => <label key={name} className="grid gap-2 text-sm font-bold text-navy">{label}<input name={name} value={form[name]} onChange={update} className="rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-accent" />{errors[name] && <span className="text-xs text-red-600">{errors[name]}</span>}</label>)}
    <div className="rounded-xl border border-dashed border-slate-300 p-4 text-sm text-slate-600 md:col-span-2">Resume upload placeholder: connect to form backend or storage later.</div>
    <label className="grid gap-2 text-sm font-bold text-navy md:col-span-2">Message<textarea name="message" rows="4" value={form.message} onChange={update} className="rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-accent" /></label>
    <div className="md:col-span-2"><Button type="submit">Submit Application</Button></div>
  </form>
}
