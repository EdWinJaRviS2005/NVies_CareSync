import './App.css'
const sectionLinks = [
  { href: '#overview', label: 'Overview' },
  { href: '#features', label: 'Features' },
  { href: '#journeys', label: 'Journeys' },
  { href: '#stack', label: 'Tech Stack' },
  { href: '#quick-start', label: 'Quick Start' },
]

const featureCards = [
  {
    title: 'Doctor Discovery',
    text: 'Browse doctors with live availability and smart filters for specialty, timing, and urgency.',
  },
  {
    title: 'Booking Flow',
    text: 'Reserve, reschedule, and cancel appointments with minimal steps and clear confirmation states.',
  },
  {
    title: 'Remote Consultation',
    text: 'Join a consultation room for chat-first care with video-provider-ready architecture.',
  },
  {
    title: 'Reminders & Alerts',
    text: 'Keep patients informed through timely booking reminders and follow-up communication.',
  },
  {
    title: 'Ratings & Feedback',
    text: 'Capture post-consult ratings to improve care quality and monitor provider experience.',
  },
  {
    title: 'Workflow Automation',
    text: 'Automate follow-ups, outbound calls, and communication paths using workflow steps.',
  },
]

const techStack = [
  {
    title: 'Frontend',
    tools: 'Next.js 16, React 19, TypeScript, Tailwind CSS 4, shadcn/ui patterns',
  },
  {
    title: 'Backend',
    tools: 'FastAPI, Uvicorn, Pydantic v2, httpx, aiohttp',
  },
  {
    title: 'Database & Auth',
    tools: 'Supabase + PostgreSQL with role-based doctor/patient auth flows',
  },
  {
    title: 'Integrations',
    tools: 'ElevenLabs ConvAI, Twilio, Google Calendar, PDF processing libraries',
  },
]

function App() {
  return (
    <>
      <a href="#overview" className="skip-link">
        Skip to content
      </a>

      <header className="site-header">
        <div className="site-header__inner shell">
          <div>
            <p className="eyebrow">CareSync AI</p>
            <p className="tagline">Remote healthcare, designed for speed and clarity.</p>
          </div>

          <nav className="section-nav" aria-label="Primary">
            {sectionLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="shell content-spacing" id="overview">
        <section className="hero">
          <p className="eyebrow">Problem statement</p>
          <h1>Find available doctors fast and complete consultations remotely.</h1>
          <p className="lead">
            CareSync AI combines doctor availability, appointment booking, and consultation into
            one easy workflow for patients and providers.
          </p>

          <div className="pill-row" aria-label="Core objectives">
            <span className="pill">Improve doctor-patient accessibility</span>
            <span className="pill">Enable remote chat/video care</span>
            <span className="pill">Reduce booking friction</span>
          </div>
        </section>

        <section id="features" aria-labelledby="features-title">
          <div className="section-heading">
            <p className="eyebrow">Key features</p>
            <h2 id="features-title">Everything needed for a complete care journey</h2>
          </div>

          <div className="card-grid">
            {featureCards.map((card) => (
              <article className="card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="journeys" className="split" aria-labelledby="journeys-title">
          <article className="panel">
            <p className="eyebrow">Patient journey</p>
            <h2 id="journeys-title">Simple and accessible patient flow</h2>
            <ul className="check-list">
              <li>Search doctors by specialty and real-time availability.</li>
              <li>Book, reschedule, or cancel appointments quickly.</li>
              <li>Join remote consultation room for chat and video-ready care.</li>
              <li>Receive reminders and post-consult communication.</li>
            </ul>
          </article>

          <article className="panel panel-accent">
            <p className="eyebrow">Doctor workflow</p>
            <h2>Provider-first dashboard experience</h2>
            <ul className="check-list">
              <li>Manage open slots and live availability efficiently.</li>
              <li>Review patient context before the consultation starts.</li>
              <li>Capture ratings and automate follow-up actions.</li>
              <li>Use notifications and workflows to reduce missed care.</li>
            </ul>
          </article>
        </section>

        <section id="stack" aria-labelledby="stack-title">
          <div className="section-heading">
            <p className="eyebrow">Tech stack</p>
            <h2 id="stack-title">Production-ready architecture choices</h2>
          </div>

          <div className="stack-grid">
            {techStack.map((entry) => (
              <article className="stack-item" key={entry.title}>
                <h3>{entry.title}</h3>
                <p>{entry.tools}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="quick-start" className="quick-start" aria-labelledby="quick-start-title">
          <div className="section-heading">
            <p className="eyebrow">Quick start</p>
            <h2 id="quick-start-title">Run locally in a few commands</h2>
          </div>

          <div className="split">
            <article className="panel code-panel">
              <h3>Backend</h3>
              <pre>
                <code>{`cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000`}</code>
              </pre>
            </article>

            <article className="panel code-panel">
              <h3>Frontend</h3>
              <pre>
                <code>{`cd frontend
npm install
npm run dev`}</code>
              </pre>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
