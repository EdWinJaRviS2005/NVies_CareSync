import { useState } from 'react'
import './App.css'

type PageKey = 'overview' | 'patients' | 'doctors' | 'workflow' | 'start'

const pages: {
  key: PageKey
  label: string
  eyebrow: string
  title: string
  description: string
  highlights: string[]
  cards: { title: string; text: string }[]
}[] = [
  {
    key: 'overview',
    label: 'Overview',
    eyebrow: 'CareSync AI',
    title: 'One workflow for finding doctors, booking care, and handling follow-up.',
    description:
      'A healthcare platform designed to reduce friction between patients and providers by combining discovery, booking, consultation, and automation in one place.',
    highlights: ['Doctor availability', 'Remote consultation', 'Workflow automation'],
    cards: [
      {
        title: 'Fast discovery',
        text: 'Search doctors by specialty, availability, and urgency without bouncing between separate tools.',
      },
      {
        title: 'Single care flow',
        text: 'Move from availability to booking, consultation, reminders, and follow-up in one guided experience.',
      },
      {
        title: 'Built for scale',
        text: 'Frontend patterns are ready for Supabase-backed authentication, scheduling, and real-time updates.',
      },
    ],
  },
  {
    key: 'patients',
    label: 'Patients',
    eyebrow: 'Patient journey',
    title: 'Find care quickly, reserve a slot, and enter the consultation room without extra steps.',
    description:
      'The patient experience focuses on speed and clarity: discover the right doctor, book the earliest available slot, join a consultation room, and keep reminders visible.',
    highlights: ['Smart doctor filters', 'Slot reservation', 'Reminders and follow-ups'],
    cards: [
      {
        title: 'Doctor search',
        text: 'A clean directory surface for filtering by specialty, availability, and care mode.',
      },
      {
        title: 'Booking flow',
        text: 'Reserve, reschedule, or cancel appointments with a concise and predictable flow.',
      },
      {
        title: 'Remote consults',
        text: 'Chat-first consultation room design that can expand into a video provider integration later.',
      },
    ],
  },
  {
    key: 'doctors',
    label: 'Doctors',
    eyebrow: 'Provider workspace',
    title: 'Keep availability visible, manage patient flow, and close the loop with feedback.',
    description:
      'Doctors need a focused dashboard to show live availability, confirm appointments, review patient context, and capture ratings after the consult.',
    highlights: ['Availability control', 'Feedback loop', 'Follow-up actions'],
    cards: [
      {
        title: 'Availability board',
        text: 'A compact scheduling surface for open slots, breaks, and consultation load.',
      },
      {
        title: 'Patient context',
        text: 'Each booking can surface relevant intake notes, history, or workflow steps before the call begins.',
      },
      {
        title: 'Post-visit feedback',
        text: 'A rating and follow-up path keeps care quality visible and helps automate next actions.',
      },
    ],
  },
  {
    key: 'workflow',
    label: 'Workflow',
    eyebrow: 'Automation engine',
    title: 'Use workflows to route calls, reminders, calendar sync, and follow-up automation.',
    description:
      'The workflow layer is the connective tissue between intake, communication, and external integrations such as ElevenLabs, Twilio, and Google Calendar.',
    highlights: ['Workflow builder', 'Voice call automation', 'Calendar sync'],
    cards: [
      {
        title: 'Automation steps',
        text: 'Model booking follow-ups, voice workflows, and notification triggers as reusable steps.',
      },
      {
        title: 'Integrations',
        text: 'Support ElevenLabs conversational AI, Twilio telephony, and appointment syncing in one place.',
      },
      {
        title: 'Operational visibility',
        text: 'Keep workflow status legible so teams can see what fired, what failed, and what needs attention.',
      },
    ],
  },
  {
    key: 'start',
    label: 'Start',
    eyebrow: 'Local setup',
    title: 'Run the frontend and backend locally with the environment variables the README expects.',
    description:
      'This page is a practical launch checklist for the project structure described in the repository README.',
    highlights: ['Frontend dev server', 'FastAPI backend', 'Local env files'],
    cards: [
      {
        title: 'Frontend',
        text: 'Install dependencies in b_frontend and run the Vite dev server.',
      },
      {
        title: 'Backend',
        text: 'Create the backend virtual environment, install requirements, and start Uvicorn.',
      },
      {
        title: 'Environment',
        text: 'Set Supabase and ElevenLabs variables before testing booking or consultation flows.',
      },
    ],
  },
]

function App() {
  const [activePage, setActivePage] = useState<PageKey>('overview')

  const page = pages.find((entry) => entry.key === activePage) ?? pages[0]

  return (
    <main className="shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">CareSync AI</p>
          <h1>{page.title}</h1>
        </div>

        <nav className="tabs" aria-label="CareSync sections">
          {pages.map((entry) => (
            <button
              key={entry.key}
              type="button"
              className={entry.key === activePage ? 'tab is-active' : 'tab'}
              onClick={() => setActivePage(entry.key)}
            >
              {entry.label}
            </button>
          ))}
        </nav>
      </header>

      <section className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">{page.eyebrow}</p>
          <p className="lead">{page.description}</p>

          <div className="pill-row" aria-label="Highlights">
            {page.highlights.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        </div>

        <aside className="signal-panel">
          <div className="signal-grid">
            <div>
              <span className="signal-label">Patients</span>
              <strong>Find care faster</strong>
            </div>
            <div>
              <span className="signal-label">Doctors</span>
              <strong>Manage live availability</strong>
            </div>
            <div>
              <span className="signal-label">Automation</span>
              <strong>Keep follow-up moving</strong>
            </div>
            <div>
              <span className="signal-label">Consultation</span>
              <strong>Chat and video-ready</strong>
            </div>
          </div>
        </aside>
      </section>

      <section className="content-grid">
        {page.cards.map((card) => (
          <article className="info-card" key={card.title}>
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </article>
        ))}
      </section>

      <section className="two-up">
        <article className="panel">
          <p className="eyebrow">Product scope</p>
          <h2>What the frontend should communicate</h2>
          <ul className="check-list">
            <li>Doctor listing with real-time availability and filtering.</li>
            <li>Appointment booking, slot reservation, reschedule, and cancellation.</li>
            <li>Remote consultation room with chat and video-provider readiness.</li>
            <li>Notifications, reminders, ratings, and workflow follow-up.</li>
          </ul>
        </article>

        <article className="panel panel-accent">
          <p className="eyebrow">Implementation note</p>
          <h2>Built without extra dependencies</h2>
          <p>
            This frontend uses plain React state and CSS so it stays lightweight until the project
            needs routing, authenticated dashboards, or backend integration.
          </p>
        </article>
      </section>
    </main>
  )
}

export default App
