// post-licensing.jsx — Nevada Post-Licensing page. Reuses S (Nevada) + PostLicensing from get-licensed.jsx.

const PL = S.postLicensing;
const plRegisterProps = { href: PL.url, target: "_blank", rel: "noopener noreferrer" };

window.STICKY_CTA = { title: 'Nevada Post-Licensing', note: '$10 per session', href: PL.url, label: 'Register' };

const PL_FAQS = [
  { q: "Who has to take post-licensing in Nevada?", a: "First-year licensees. This 30-hour course is approved by the Nevada Real Estate Division and meets the educational requirements of NAC 645.4442 for first year licensees." },
  { q: "How much does the post-licensing course cost?", a: "$10 per session, or $100 for all 10 sessions." },
  { q: "Can I take the sessions one at a time?", a: "Yes. Register for the full Sessions 1\u201310 bundle, or enroll session by session. On the registration site the sessions are listed as \u201cQuick Start.\u201d" },
  { q: "Does post-licensing count as continuing education (CE)?", a: "No. This course is for first year licensees only and is not Continuing Education (CE).", link: { href: "/continuing-education-nevada", label: "See Nevada CE classes" } },
  { q: "What do I need before I register?", a: "Your License Number assigned from the Real Estate Division. You must have it to get the required credit for these courses." },
  { q: "How are the classes held?", a: "Live and in person. The course consists of 10 sessions and includes a review at the end of each session." },
  { q: "Who do I contact with questions?", a: `Call our direct line at ${S.phone} or email ${S.email}.` },
];

function PLHero() {
  return (
    <section className="gl-hero">
      <div className="gl-hero-bg">
        <img className="hero-photo" src="assets/hero-classroom.jpg" alt="" aria-hidden="true" fetchpriority="high" decoding="async"/>
      </div>
      <div className="container gl-hero-content">
        <div className="gl-crumbs">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/get-licensed-nevada" style={{color:'var(--gold)'}}>Nevada</a>
          <span>/</span>
          <span style={{opacity:0.7}}>Post-Licensing</span>
        </div>
        <div className="eyebrow">Post-Licensing Course · Nevada</div>
        <h1>Nevada Post-Licensing.<br/><span className="gold">For first-year licensees.</span></h1>
        <p className="gl-hero-sub">A 30-hour course approved by the Nevada Real Estate Division, taught live and in person by Berkshire Hathaway HomeServices Nevada Properties.</p>
        <div className="hero-ctas">
          <a className="btn btn-gold" {...plRegisterProps}><Icon.Calendar size={15}/> View Dates &amp; Register</a>
          <a className="btn btn-ghost" href="#postlicensing"><Icon.Arrow size={15}/> See All 10 Sessions</a>
          <a className="btn btn-ghost" href={S.phoneHref}><Icon.Phone size={15}/> {S.phoneLabel} · {S.phone}</a>
        </div>
        <div className="gl-quickfacts">
          <div><div className="k">30<span style={{color:'var(--gold)'}}>hr</span></div><div className="v">Of instruction</div></div>
          <div><div className="k">10</div><div className="v">Sessions</div></div>
          <div><div className="k">$10</div><div className="v">Per session</div></div>
          <div><div className="k">$100</div><div className="v">All 10 sessions</div></div>
        </div>
      </div>
    </section>
  );
}

function PLFaq() {
  return (
    <section className="section dark" id="faq">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Common Questions</div>
          <h2>Post-licensing,<br/><span className="gold">answered.</span></h2>
        </div>
        <div className="pl-faq reveal">
          {PL_FAQS.map((f, i) => (
            <details key={i} className="pl-faq-item" open={i === 0}>
              <summary><span>{f.q}</span><span className="pl-faq-ic" aria-hidden="true">+</span></summary>
              <p>{f.a}{f.link && <> <a href={f.link.href}>{f.link.label}</a></>}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function PLFinal() {
  return (
    <section id="register" className="final">
      <div className="final-bg"></div>
      <div className="container reveal">
        <div className="eyebrow" style={{justifyContent:'center', display:'flex'}}>Register</div>
        <h2 style={{marginTop:22}}>Start your<br/><span className="gold">post-licensing.</span></h2>
        <p>$10 per session, or $100 for all 10 sessions. Have your License Number ready when you register.</p>
        <div className="final-ctas">
          <a className="btn btn-gold" {...plRegisterProps}><Icon.Calendar size={15}/> View Dates &amp; Register</a>
          <a className="btn btn-ghost" href={S.phoneHref}><Icon.Phone size={15}/> {S.phoneLabel} · {S.phone}</a>
          <a className="btn btn-ghost" href={"mailto:" + S.email}><Icon.Send size={15}/> {S.email}</a>
        </div>
      </div>
    </section>
  );
}

function PLApp() {
  React.useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <>
      <Nav/>
      <PLHero/>
      <PostLicensing/>
      <PLFaq/>
      <PLFinal/>
      <Footer/>
      <StickyCTA/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PLApp/>);
