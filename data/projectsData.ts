interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Bedenker Labs',
    description: `My software development & consulting group. We design, build, and operate
    full-stack systems for a portfolio of long-term clients — from multi-tenant
    SaaS platforms to payment integrations and ERP modernization.`,
    href: 'https://bedenkerlabs.com/',
  },
  {
    title: 'Multi-tenant SaaS platform for clinics',
    description: `A Django-based multi-tenant SaaS product serving multiple healthcare
    clinics from a single codebase — tenant isolation, scheduling, point-of-sale,
    and patient management under one roof.`,
  },
  {
    title: 'Centralized payment gateway',
    description: `A multi-merchant Django service that centralizes card payment integrations
    (one-off charges, recurring subscriptions, and embedded checkout) for several
    products at once, instead of each one re-implementing the integration from
    scratch.`,
  },
  {
    title: 'Multi-tenant AI agent platform',
    description: `A platform that provisions and operates isolated AI-driven assistants per
    tenant for operational and customer-facing automation — built on top of
    OpenClaw, with per-tenant credential isolation and media understanding.`,
  },
  {
    title: 'ERP modernization for a membership organization',
    description: `Ongoing modernization of a large, long-running Django ERP (14+ modules:
    finance, inventory, HR, access control) for a membership-based organization —
    legacy system taken over mid-flight, with real production deploys.`,
  },
]

export default projectsData
