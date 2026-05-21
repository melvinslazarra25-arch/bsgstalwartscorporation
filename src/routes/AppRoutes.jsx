import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import HVACR from '../pages/HVACR'
import MEPF from '../pages/MEPF'
import OperationsMaintenance from '../pages/OperationsMaintenance'
import EngineeringProducts from '../pages/EngineeringProducts'
import ProjectManagement from '../pages/ProjectManagement'
import Projects from '../pages/Projects'
import Industries from '../pages/Industries'
import Careers from '../pages/Careers'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import RequestQuote from '../pages/RequestQuote'
import ThankYou from '../pages/ThankYou'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import NotFound from '../pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/hvac-r" element={<HVACR />} />
      <Route path="/services/mepf-contracting" element={<MEPF />} />
      <Route path="/services/operations-maintenance" element={<OperationsMaintenance />} />
      <Route path="/services/engineering-products" element={<EngineeringProducts />} />
      <Route path="/services/project-management" element={<ProjectManagement />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/request-a-quote" element={<RequestQuote />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
