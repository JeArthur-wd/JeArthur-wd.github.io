import Effects from "@/components/Effects";
import TwinChat from "@/components/TwinChat";
import { profile, stats, journey, skills, practices, portfolio, DEVICON } from "@/lib/data";

const RESUME = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Arthur-Jemba-Resume.pdf`;

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3 11L11 3M11 3H4.5M11 3v6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SectionHead = ({ kicker, title }) => (
  <header className="sec-head" data-reveal>
    <p className="kicker">{kicker}</p>
    <h2 className="h2">{title}</h2>
  </header>
);

// Small CSS-drawn previews for the dark card headers, one per `art` kind in lib/data.js.
const ProjectArt = ({ kind, tag }) => {
  if (kind === "chat")
    return (
      <div className="art-window">
        <div className="art-dots"><i /><i /><i /></div>
        <p className="art-hl">NDA draft — in progress</p>
        <p>You: &quot;I need a mutual NDA for a contractor…&quot;</p>
        <p>AI: &quot;Got it. What&apos;s the governing law?&quot;</p>
      </div>
    );
  if (kind === "board")
    return (
      <div className="art-board">
        {[3, 2, 4].map((n, c) => (
          <div className="art-col" key={c}>
            {Array.from({ length: n }, (_, i) => <i key={i} />)}
          </div>
        ))}
      </div>
    );
  if (kind === "nodes")
    return (
      <svg className="art-svg" viewBox="0 0 220 90">
        <g stroke="currentColor" strokeOpacity=".35">
          <line x1="110" y1="45" x2="40" y2="20" /><line x1="110" y1="45" x2="40" y2="72" />
          <line x1="110" y1="45" x2="180" y2="18" /><line x1="110" y1="45" x2="182" y2="70" />
          <line x1="40" y1="20" x2="40" y2="72" />
        </g>
        <circle cx="110" cy="45" r="11" fill="#e2a34a" />
        <circle cx="40" cy="20" r="7" fill="#5fb3a1" /><circle cx="40" cy="72" r="7" fill="#7a8ce0" />
        <circle cx="180" cy="18" r="7" fill="#d9675a" /><circle cx="182" cy="70" r="7" fill="#5fb3a1" />
      </svg>
    );
  if (kind === "code")
    return (
      <pre className="art-code">
        <b>app</b>.get(<s>&quot;/api/users&quot;</s>, auth,{"\n"}  async (req, res) =&gt; {"{"}{"\n"}    res.json(<b>await</b> db.users());{"\n"}  {"}"});
      </pre>
    );
  return (
    <div className="art-window">
      <div className="art-dots"><i /><i /><i /></div>
      <p className="art-hl">jearthur-wd.github.io</p>
      <p>{tag} · hand-written CSS · static export</p>
    </div>
  );
};

export default function Home() {
  const [first, ...rest] = profile.name.split(" ");

  return (
    <>
      <Effects />
      <TwinChat />
      <div className="progress" aria-hidden="true" />

      <header className="nav">
        <a href="#top" className="brand">
          {profile.name}
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#resume">Resume</a>
        </nav>
        <a className="btn btn-sm btn-primary" href="#contact">
          Get in touch
        </a>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <p className="kicker" data-reveal>
                {profile.role} · {profile.location}
              </p>
              <h1 className="hero-title" data-reveal>
                Hi, I&apos;m {first}.
                <br />
                I build web apps <em>that ship.</em>
              </h1>
              <p className="hero-sub" data-reveal>
                Full-stack products with React and Next.js on the front, FastAPI and Express on the back,
                packaged in Docker and running live.
              </p>
              <div className="hero-cta" data-reveal>
                <a className="btn btn-primary" href="#work">
                  See my work <Arrow />
                </a>
                <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
                  GitHub <Arrow />
                </a>
              </div>
            </div>

            <figure className="portrait" data-reveal>
              {profile.photo ? (
                <img src={profile.photo} alt={profile.name} />
              ) : (
                <div className="monogram" aria-hidden="true">
                  {first[0]}
                  {rest.join(" ")[0]}
                </div>
              )}
              <figcaption className="portrait-badge">
                <span className="badge-num">{stats[0].value}</span>
                <span className="badge-label">{stats[0].label}</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="wrap">
            <SectionHead kicker="About" title="A little about me" />
            <div className="about-grid">
              <div data-reveal>
                <p className="lead">{profile.about[0]}</p>
                {profile.about.slice(1).map((p) => (
                  <p className="body" key={p}>
                    {p}
                  </p>
                ))}
                <blockquote className="quote">“{profile.quote}”</blockquote>
              </div>
              <dl className="stats" data-reveal>
                {stats.map((s) => (
                  <div className="stat" key={s.label}>
                    <dt className="stat-l">{s.label}</dt>
                    <dd className="stat-v">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="section alt">
          <div className="wrap">
            <SectionHead kicker="Selected work" title="Projects" />
            <div className="work-grid">
              {portfolio.map((p) => (
                <article className="card" key={p.title} data-reveal>
                  <div className={`card-art is-${p.art}`} aria-hidden="true">
                    <ProjectArt kind={p.art} tag={p.tag} />
                  </div>
                  <div className="card-body">
                    <h3>{p.title}</h3>
                    <div className="card-links">
                      {p.live && (
                        <a className="pill pill-live" href={p.live} target="_blank" rel="noreferrer">
                          Live <Arrow />
                        </a>
                      )}
                      {p.github && (
                        <a className="pill pill-gh" href={p.github} target="_blank" rel="noreferrer">
                          GitHub <Arrow />
                        </a>
                      )}
                    </div>
                    <p className="card-stack">{p.stack.join(" · ")}</p>
                    <p>{p.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="wrap">
            <SectionHead kicker="What I work with" title="Languages & skills" />
            <ul className="skill-grid">
              {skills.map((s) => (
                <li className="skill" key={s.name} data-reveal>
                  <img src={`${DEVICON}/${s.icon}.svg`} alt="" width="52" height="52" loading="lazy" />
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-group">{s.group}</span>
                </li>
              ))}
            </ul>
            <ul className="tags skill-extra" data-reveal>
              {practices.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section alt">
          <div className="wrap">
            <SectionHead kicker="Background" title="Education" />
            <ol className="timeline">
              {[...journey].reverse().map((j) => (
                <li className="t-item" key={j.date + j.title} data-reveal>
                  <div className="t-date">{j.date}</div>
                  <div>
                    <h3>{j.title}</h3>
                    <div className="t-org">
                      {j.org} · {j.place}
                    </div>
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

        {/* RESUME */}
        <section id="resume" className="section">
          <div className="wrap">
            <SectionHead kicker="Resume" title="Everything on paper" />
            <div className="hero-cta" data-reveal>
              <a className="btn btn-primary" href={RESUME} target="_blank" rel="noreferrer">
                View resume <Arrow />
              </a>
              <a className="btn" href={RESUME} download="Arthur-Jemba-Resume.pdf">
                Download PDF
              </a>
            </div>
            <div className="resume-frame" data-reveal>
              <iframe src={`${RESUME}#view=FitH`} title={`${profile.name} resume`} loading="lazy" />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <div className="wrap">
            <p className="kicker" data-reveal>
              Contact
            </p>
            <h2 className="mega" data-reveal>
              Have a project or a role in mind?
              <br />
              <em>Let&apos;s talk.</em>
            </h2>
            <div className="hero-cta" data-reveal>
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                {profile.email} <Arrow />
              </a>
              <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
                GitHub / {profile.githubHandle} <Arrow />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-in">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
