import Effects from "@/components/Effects";
import TwinChat from "@/components/TwinChat";
import {
  profile,
  stats,
  journey,
  capabilities,
  marquee,
  portfolio,
} from "@/lib/data";

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3 11L11 3M11 3H4.5M11 3v6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
  </svg>
);

export default function Home() {
  return (
    <>
      <Effects />
      <TwinChat />
      <div className="progress" aria-hidden="true" />
      <div className="spotlight" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <header className="nav">
        <a href="#top" className="brand">
          <span className="brand-mark">AJ</span>
          <span className="brand-name">Arthur Jemba</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#journey">Journey</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#portfolio">Portfolio</a>
        </nav>
        <a className="btn btn-sm" href="#contact">
          Get in touch <Arrow />
        </a>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="wrap">
            <div className="status" data-reveal>
              <span className="pulse" /> Open to opportunities · {profile.location}
            </div>
            <h1 className="hero-title" data-reveal>
              I build for the web.
              <br />
              <span className="hl">I know how it sells.</span>
            </h1>
            <p className="hero-sub" data-reveal>
              {profile.role}. React and Express engineering paired with consultative outreach,
              from the first line of code to the booked call.
            </p>
            <div className="hero-cta" data-reveal>
              <a className="btn btn-primary" href="#portfolio">
                View portfolio <Arrow />
              </a>
              <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
                GitHub / {profile.githubHandle} <Arrow />
              </a>
            </div>
          </div>

          <div className="marquee" aria-hidden="true">
            <div className="marquee-track">
              {[...marquee, ...marquee].map((m, i) => (
                <span key={i}>
                  {m}
                  <i>/</i>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="wrap">
            <div className="eyebrow" data-reveal>
              <span>01</span> About
            </div>
            <div className="about-grid">
              <h2 className="h2" data-reveal>
                A developer who understands revenue.
              </h2>
              <div data-reveal>
                <p className="lead">{profile.summary}</p>
                <p className="body">
                  Based in Kampala and working remotely with international teams, I combine hands-on
                  knowledge of web services, UI/UX and digital infrastructure with real pipeline
                  discipline: structured outreach, clean CRM records and follow-through that keeps
                  every prospect moving.
                </p>
              </div>
            </div>
            <div className="stats">
              {stats.map((s) => (
                <div className="stat" key={s.label} data-reveal>
                  <div className="stat-v">{s.value}</div>
                  <div className="stat-l">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section id="journey" className="section">
          <div className="wrap">
            <div className="eyebrow" data-reveal>
              <span>02</span> Career journey
            </div>
            <h2 className="h2 wide" data-reveal>
              From IT student to engineer-closer.
            </h2>
            <ol className="timeline">
              {[...journey].reverse().map((j) => (
                <li className="t-item" key={j.date + j.title} data-reveal>
                  <div className="t-date">{j.date}</div>
                  <div className="t-card">
                    <div className="t-top">
                      <span className="chip">{j.kind}</span>
                      <span className="t-place">{j.place}</span>
                    </div>
                    <h3>{j.title}</h3>
                    <div className="t-org">{j.org}</div>
                    <ul>
                      {j.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section id="capabilities" className="section">
          <div className="wrap">
            <div className="eyebrow" data-reveal>
              <span>03</span> Capabilities
            </div>
            <h2 className="h2 wide" data-reveal>
              Two disciplines. One operator.
            </h2>
            <div className="cap-grid">
              {capabilities.map((c) => (
                <article className="cap" key={c.code} data-reveal>
                  <div className="cap-code">{c.code}</div>
                  <h3>{c.title}</h3>
                  <ul>
                    {c.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="section">
          <div className="wrap">
            <div className="eyebrow" data-reveal>
              <span>04</span> Portfolio
            </div>
            <h2 className="h2 wide" data-reveal>
              Selected work.
            </h2>
            <div className="work-list">
              {portfolio.map((p) => (
                <a
                  className="work"
                  key={p.index}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  data-reveal
                >
                  <span className="work-i">{p.index}</span>
                  <div className="work-main">
                    <div className="work-tag">{p.tag}</div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="work-stack">
                      {p.stack.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                  </div>
                  <span className="work-cta">
                    {p.cta} <Arrow />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <div className="wrap">
            <div className="eyebrow" data-reveal>
              <span>05</span> Contact
            </div>
            <h2 className="mega" data-reveal>
              Let&apos;s build
              <br />
              <span className="hl">something that converts.</span>
            </h2>
            <div className="contact-row" data-reveal>
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                {profile.email} <Arrow />
              </a>
              <a className="btn" href={`tel:${profile.phoneHref}`}>
                {profile.phone} <Arrow />
              </a>
              <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
                GitHub <Arrow />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-in">
          <span>© {new Date().getFullYear()} Arthur Jemba</span>
          <span>{profile.location}</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
