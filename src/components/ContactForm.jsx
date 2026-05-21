import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

export default function ContactForm() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name) next.name = 'Name is required.'
    if (!form.email) next.email = 'Email is required.'
    if (!form.message) next.message = 'Message is required.'
    setErrors(next)
    if (Object.keys(next).length === 0) navigate('/thank-you')
  }
  return <form onSubmit={submit} className="grid gap-4 rounded-2xl bg-white p-6 shadow-card">
    {['name','email','phone','subject'].map((field) => <label key={field} className="grid gap-2 text-sm font-bold text-navy capitalize">{field}<input name={field} value={form[field]} onChange={update} className="rounded-xl border border-slate-300 px-4 py-3 font-normal text-slate-700 outline-none focus:border-accent" />{errors[field] && <span className="text-xs text-red-600">{errors[field]}</span>}</label>)}
    <label className="grid gap-2 text-sm font-bold text-navy">Message<textarea name="message" rows="5" value={form.message} onChange={update} className="rounded-xl border border-slate-300 px-4 py-3 font-normal text-slate-700 outline-none focus:border-accent" />{errors.message && <span className="text-xs text-red-600">{errors.message}</span>}</label>
    <Button type="submit">Send Inquiry</Button>
  </form>
}
