import Image from "next/image";
import kodiAiScreenshot from "../../public/kodi_ai.png";
import profilePhoto from "../../public/pfp.png";
import proteinBuddyScreenshot from "../../public/protein_buddy.png";
import screenshotOne from "../../public/screenshot_1.png";
import screenshotTwo from "../../public/screenshot_2.png";
import { CursorGlow } from "./cursor-glow";
import { ExperienceReveal } from "./experience-reveal";

export default function Home() {
  return (
    <main>
      <header className="top-nav">
        <a className="nav-identity" href="#" aria-label="Caleb Chiang, home">
          <span className="nav-avatar">
            <Image
              src={profilePhoto}
              alt="Caleb Chiang"
              fill
              sizes="128px"
              priority
            />
          </span>
          <span className="nav-name">Caleb Chiang</span>
          <span className="nav-role"><span>/</span> iOS dev</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#work">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <a className="github-link" href="https://github.com/calebchiang" target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a className="hire-button" href="#contact">Contact</a>
        </div>
      </header>

      <div className="hero-shell">
        <div className="dot-grid" aria-hidden="true" />
        <CursorGlow />

        <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="availability">
            <span className="status-dot" />
            <span>Available for work</span>
          </div>

          <h1 id="hero-title">
            <span className="headline-row">
              <span className="headline-rule" aria-hidden="true" />
              I build
            </span>
            <span>mobile apps</span>
            <span>
              that <em>ship</em>.
            </span>
          </h1>

          <p className="intro">
            I&apos;m <strong>Caleb Chiang</strong>, a junior{" "}
            <strong>iOS developer in Vancouver, BC</strong>, with 2+ years and
            20K+ downloads behind me. I help teams ship thoughtful, reliable
            iOS products from concept to launch.
          </p>

          <div className="actions">
            <a className="primary-button" href="#work">
              View projects <span aria-hidden="true">↓</span>
            </a>
            <a className="secondary-button" href="#contact">
              Get in touch
            </a>
            <a className="resume-link" href="#resume">
              <span aria-hidden="true">↓</span> resume.pdf
            </a>
          </div>

          <ul className="skills" aria-label="Key skills">
            <li>Swift</li>
            <li>SwiftUI</li>
            <li>UIKit</li>
            <li>MVVM</li>
          </ul>
        </div>

        <div className="phone-stage" aria-label="Protein tracking app previews">
          <div className="phone phone-back">
            <Image
              src={proteinBuddyScreenshot}
              alt="Progress screen of a protein tracking iPhone app"
              width={1284}
              height={2778}
              sizes="(max-width: 700px) 52vw, (max-width: 1100px) 34vw, 330px"
              priority
            />
          </div>
          <div className="phone phone-front">
            <Image
              src={screenshotTwo}
              alt="Meals screen of a protein tracking iPhone app"
              width={1284}
              height={2778}
              sizes="(max-width: 700px) 52vw, (max-width: 1100px) 34vw, 330px"
              priority
            />
          </div>
        </div>
        </section>
      </div>

      <section className="projects-section" id="work" aria-labelledby="projects-title">
        <header className="projects-heading">
          <span>Selected work</span>
          <h2 id="projects-title">
            Shipped &amp; <em>in production</em>.
          </h2>
        </header>

        <article className="project-card project-protein">
          <Image
            className="project-screenshot"
            src={screenshotOne}
            alt="ProteinBuddy progress dashboard on an iPhone"
            width={1284}
            height={2778}
            sizes="(max-width: 820px) 58vw, 290px"
          />

          <div className="project-content">
            <span className="project-number" aria-hidden="true">01</span>
            <div className="project-kicker"><span /> 01 · Nutrition &amp; fitness</div>
            <h3>ProteinBuddy</h3>
            <p className="project-tagline">Hit your protein goals without the guesswork.</p>
            <p className="project-description">
              A focused nutrition companion that makes logging meals, tracking
              protein, and understanding daily progress feel quick and simple.
              Built for people who want useful insights without a complicated
              calorie-counting workflow.
            </p>

            <ul className="project-tags" aria-label="ProteinBuddy technologies">
              <li>SwiftUI</li>
              <li>MVVM</li>
              <li>PostgreSQL</li>
              <li>Go REST API</li>
              <li>RevenueCat</li>
              <li>OpenAI</li>
            </ul>

            <dl className="project-stats">
              <div><dt>5K+</dt><dd>Downloads</dd></div>
              <div><dt>4.8★</dt><dd>App Store</dd></div>
              <div><dt>iOS</dt><dd>Platform</dd></div>
              <div><dt>Live</dt><dd>On store</dd></div>
            </dl>

            <div className="project-actions">
              <a className="project-primary" href="#">App Store <span>↗</span></a>
            </div>
          </div>
        </article>

        <article className="project-card project-kodi">
          <Image
            className="project-screenshot"
            src={kodiAiScreenshot}
            alt="Kodi AI mobile application shown on an iPhone"
            width={1284}
            height={2778}
            sizes="(max-width: 820px) 58vw, 290px"
          />

          <div className="project-content">
            <span className="project-number" aria-hidden="true">02</span>
            <div className="project-kicker"><span /> 02 · Education</div>
            <h3>Kodi AI</h3>
            <p className="project-tagline">Build confidence every time you speak.</p>
            <p className="project-description">
              A public-speaking education app with 80+ interactive
              microlessons and AI-powered practice modes. Users can rehearse
              speeches, sharpen their delivery, and receive constructive
              feedback on the areas they can improve.
            </p>

            <ul className="project-tags" aria-label="Kodi AI technologies">
              <li>Swift</li>
              <li>UIKit</li>
              <li>OpenAI</li>
              <li>RevenueCat</li>
              <li>Go REST API</li>
              <li>PostgreSQL</li>
            </ul>

            <dl className="project-stats">
              <div><dt>15K+</dt><dd>Downloads</dd></div>
              <div><dt>4.7★</dt><dd>App Store</dd></div>
              <div><dt>iOS</dt><dd>Platform</dd></div>
              <div><dt>Live</dt><dd>Status</dd></div>
            </dl>

            <div className="project-actions">
              <a className="project-primary" href="https://apps.apple.com/app/kodi-ai-speaking-coach/id6760429558">App Store <span>↗</span></a>
            </div>
          </div>
        </article>
      </section>

      <section className="experience-section" id="experience" aria-labelledby="experience-title">
        <ExperienceReveal />
        <div className="experience-inner">
          <header className="experience-heading experience-reveal">
            <span>Experience</span>
            <h2 id="experience-title">The track record.</h2>
          </header>

          <div className="experience-list">
            <article className="experience-item experience-reveal">
              <div className="experience-period">2025 — Now</div>
              <div className="experience-content">
                <h3>Independent iOS Developer</h3>
                <p className="experience-meta">Self-directed products · Vancouver, BC</p>
                <ul className="experience-tags" aria-label="Independent iOS Developer focus areas">
                  <li>App Store</li>
                  <li>SwiftUI</li>
                  <li>Full stack</li>
                </ul>
                <ul className="experience-points">
                  <li>Designed and shipped ProteinBuddy and Kodi AI from initial concept through App Store release</li>
                  <li>Built native SwiftUI and UIKit experiences with reusable MVVM architecture</li>
                  <li>Built and maintained Go REST APIs backed by PostgreSQL, with zero production outages to date</li>
                  <li>Integrated RevenueCat subscriptions, converting 62% of trial users into paying customers</li>
                  <li>Earned 200+ reviews worldwide across both apps, with 20K+ combined downloads</li>
                  <li>Maintained a 99%+ successful response rate for OpenAI API requests in production</li>
                </ul>
              </div>
            </article>

            <article className="experience-item experience-reveal">
              <div className="experience-period">2024 — 2025</div>
              <div className="experience-content">
                <h3>Mobile Developer Co-op</h3>
                <p className="experience-meta">Impulse Studio · Client mobile application · Vancouver, BC</p>
                <ul className="experience-tags" aria-label="Mobile Developer Co-op focus areas">
                  <li>React Native</li>
                  <li>Agile</li>
                  <li>Git</li>
                </ul>
                <ul className="experience-points">
                  <li>Opened and merged 30+ pull requests, delivering production features and fixes within a four-person development team</li>
                  <li>Delivered 15+ features and bug fixes within a shared production codebase</li>
                  <li>Used Git branching and version-control practices to keep parallel work organized</li>
                  <li>Reviewed teammates’ code and coordinated conflict-free merges</li>
                  <li>Participated in daily standups, sprint planning, and Agile team ceremonies</li>
                  <li>Coordinated tasks, communicated blockers, and tested changes with teammates before delivery</li>
                </ul>
              </div>
            </article>

            <article className="experience-item experience-reveal">
              <div className="experience-period">2023 — 2025</div>
              <div className="experience-content">
                <h3>Computer Systems Technology</h3>
                <p className="experience-meta">British Columbia Institute of Technology · Burnaby, BC</p>
                <ul className="experience-tags" aria-label="BCIT Computer Systems Technology focus areas">
                  <li>Software engineering</li>
                  <li>Systems design</li>
                  <li>Industry projects</li>
                </ul>
                <ul className="experience-points">
                  <li>Completed an intensive two-year program combining computer-systems theory with hands-on software development</li>
                  <li>Built and deployed real applications through collaborative, deadline-driven project work</li>
                  <li>Developed software using JavaScript, Python, Java, C, Go, and Kotlin for Android across multiple environments</li>
                  <li>Practised the full development lifecycle from requirements and design through testing and maintenance</li>
                  <li>Strengthened problem-solving through systems, cloud computing, databases, and applied AI coursework</li>
                  <li>Worked in software teams to communicate decisions, divide scope, and deliver reliable solutions</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-aurora" aria-hidden="true" />
        <div className="contact-content">
          <span className="contact-kicker">Let&apos;s build</span>
          <h2 id="contact-title">
            Looking for an iOS developer?
            <em>Let&apos;s ship something great.</em>
          </h2>
          <p>
            Available for junior iOS opportunities. Typical reply within a day.
          </p>
          <div className="contact-actions">
            <a className="contact-email" href="mailto:caleb@calebchiang.dev">
              caleb@calebchiang.dev
            </a>
            <a className="contact-resume" href="#resume">
              Download résumé <span aria-hidden="true">↓</span>
            </a>
          </div>
          <nav className="contact-socials" aria-label="Social links">
            <a href="https://github.com/calebchiang" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-profile">
            <span className="footer-avatar">
              <Image
                src={profilePhoto}
                alt="Caleb Chiang"
                fill
                sizes="144px"
              />
            </span>
            <div>
              <strong>Caleb Chiang</strong>
              <p>Junior iOS developer helping teams ship thoughtful, reliable iOS products from concept to launch.</p>
            </div>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <span>Explore</span>
            <a href="#work">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="footer-contact">
            <span>Contact</span>
            <a href="mailto:caleb@calebchiang.dev">caleb@calebchiang.dev</a>
            <p className="footer-location">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z" />
                <circle cx="12" cy="10" r="2.25" />
              </svg>
              Vancouver, BC
            </p>
            <a href="https://github.com/calebchiang" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
