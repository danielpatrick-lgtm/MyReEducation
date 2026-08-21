// hero.jsx — Section 1: Hero with cinematic background

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg">
        <img className="hero-photo" src="assets/hero-classroom.jpg" alt="" aria-hidden="true" fetchpriority="high" decoding="async"/>
      </div>

      <div className="container hero-content">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">A Modern Real Estate Academy</div>
            <h1>
              Your New<br/>
              Career Starts<br/>
              <span className="gold">Here.</span>
            </h1>
            <p className="hero-sub">
              Get licensed with the modern real estate academy built for the next generation of agents. Live instruction, real career coaching, and a community that wins together, across Arizona, California, and Nevada.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-gold" href="#states">
                <Icon.Rocket size={15}/> Get Licensed
              </a>
              <a className="btn btn-ghost" href="#">
                <Icon.Calendar size={15}/> View Upcoming Classes
              </a>
            </div>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-row">
              <span className="k">3<span style={{color:'var(--gold)'}}>states</span></span>
              <span className="v">Arizona, California, and Nevada</span>
            </div>
            <div className="hero-meta-row">
              <span className="k">Live<span style={{color:'var(--gold)'}}>+</span></span>
              <span className="v">Instructor-led and self-paced options</span>
            </div>
            <div className="hero-meta-row">
              <span className="k">BHHS<span style={{color:'var(--gold)'}}>.</span></span>
              <span className="v">Berkshire Hathaway HomeServices schools</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="container">
          <div className="stat"><div className="ic"><Icon.Users size={15}/></div><div><div className="num">Live</div>Instructor-Led Classes</div></div>
          <div className="stat"><div className="ic"><Icon.Online size={15}/></div><div><div className="num">Zoom</div>Available in Arizona</div></div>
          <div className="stat"><div className="ic"><Icon.Sparkle size={15}/></div><div><div className="num">Included</div>Career Coaching</div></div>
          <div className="stat"><div className="ic"><Icon.Map size={15}/></div><div><div className="num">3 States</div>AZ · CA · NV</div></div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
