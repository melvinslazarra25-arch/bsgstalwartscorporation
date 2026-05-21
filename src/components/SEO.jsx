import { useEffect } from 'react'
import { siteConfig } from '../utils/siteConfig'

export default function SEO({ title, description, path = '/' }) {
  useEffect(() => {
    const fullTitle = title || `${siteConfig.name} | Engineering Contractor in Cavite`
    const desc = description || siteConfig.description
    document.title = fullTitle
    const setMeta = (name, content, attr = 'name') => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attr, name)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }
    setMeta('description', desc)
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', desc, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:url', `${siteConfig.url}${path}`, 'property')
  }, [title, description, path])
  return null
}
